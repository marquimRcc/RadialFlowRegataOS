#!/usr/bin/env bash
# SPDX-License-Identifier: MIT
# Switcher de estilo de ícones do RadialFlow / Kando para Regata OS

STYLE="${1:-system}"
CONFIG_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/kando"
MENUS_FILE="$CONFIG_DIR/menus.json"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
PRESET_SRC=""

case "$STYLE" in
  minimal|1)
    STYLE_NAME="Minimalista (Monocromático)"
    # Tenta achar preset no repo ou em /usr/share/kando ou em ~/.config/kando
    for p in "$REPO_DIR/assets/menu-presets/minimal.json" "/usr/lib/kando/presets/minimal.json" "$CONFIG_DIR/presets/minimal.json"; do
      if [ -f "$p" ]; then PRESET_SRC="$p"; break; fi
    done
    ;;
  system|so|2)
    STYLE_NAME="Nativos do Sistema (Regata OS)"
    for p in "$REPO_DIR/assets/menu-presets/system.json" "/usr/lib/kando/presets/system.json" "$CONFIG_DIR/presets/system.json"; do
      if [ -f "$p" ]; then PRESET_SRC="$p"; break; fi
    done
    ;;
  neon|cyber|gaming|3)
    STYLE_NAME="Cyber Gaming Neon (Futurista)"
    for p in "$REPO_DIR/assets/menu-presets/neon.json" "/usr/lib/kando/presets/neon.json" "$CONFIG_DIR/presets/neon.json"; do
      if [ -f "$p" ]; then PRESET_SRC="$p"; break; fi
    done
    ;;
  *)
    echo "Uso: $0 <minimal|system|neon>"
    exit 1
    ;;
esac

if [ -z "$PRESET_SRC" ] || [ ! -f "$PRESET_SRC" ]; then
  echo "Erro: Preset para estilo '$STYLE' não encontrado!" >&2
  exit 1
fi

echo "Aplicando estilo de ícones: $STYLE_NAME..."

# Cria backup do menus.json atual se existir
if [ -f "$MENUS_FILE" ]; then
  cp "$MENUS_FILE" "$CONFIG_DIR/menus.json.bak"
fi

# Copia o novo preset
mkdir -p "$CONFIG_DIR"
cp "$PRESET_SRC" "$MENUS_FILE"

# Notifica o usuário no desktop
if command -v kdialog >/dev/null 2>&1; then
  kdialog --passivepopup "Estilo de ícones alterado para: $STYLE_NAME" 3 &
fi

# Recarrega o Kando se estiver rodando
if command -v kando >/dev/null 2>&1; then
  kando --reload-icon-themes >/dev/null 2>&1 &
elif [ -x "$REPO_DIR/out/Kando-linux-x64/kando" ]; then
  "$REPO_DIR/out/Kando-linux-x64/kando" --reload-icon-themes >/dev/null 2>&1 &
fi

echo "Estilo '$STYLE_NAME' aplicado com sucesso!"
