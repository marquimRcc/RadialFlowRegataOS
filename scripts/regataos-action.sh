#!/usr/bin/env bash
# SPDX-FileCopyrightText: 2026 Regata OS Team
# SPDX-License-Identifier: MIT

# Helper de Ações Contextuais do Regata OS Radial Flow

ACTION="$1"
shift

get_dolphin_file() {
  # Tenta obter arquivo selecionado no Dolphin via D-Bus
  local DOLPHIN_SVC
  DOLPHIN_SVC=$(qdbus6 2>/dev/null | grep -m1 "org.kde.dolphin-" | tr -d ' ')
  if [ -n "$DOLPHIN_SVC" ]; then
    qdbus6 "$DOLPHIN_SVC" /dolphin/Dolphin_1/actions/edit_copy org.qtproject.Qt.QAction.trigger 2>/dev/null
    sleep 0.05
  fi

  local RAW
  RAW=$(xclip -o -selection clipboard 2>/dev/null || wl-paste 2>/dev/null)
  local TARGET
  TARGET=$(echo "$RAW" | grep -m1 "^file://" | sed -E 's|^file://||')
  if [ -z "$TARGET" ]; then
    TARGET=$(echo "$RAW" | head -n1)
  fi

  # Decodifica URL encoding (%20, etc.)
  if [ -n "$TARGET" ]; then
    printf '%b' "${TARGET//%/\\x}"
  fi
}

case "$ACTION" in
  convert-mp4)
    FILE=$(get_dolphin_file)
    if [ -f "$FILE" ]; then
      OUT="${FILE%.*}.mp4"
      konsole --hold -e ffmpeg -i "$FILE" -c:v libx264 -crf 22 "$OUT" &
    else
      kdialog --title "Regata OS - Conversão" --passivepopup "Nenhum arquivo de vídeo selecionado no Dolphin." 3 &
    fi
    ;;

  convert-webm)
    FILE=$(get_dolphin_file)
    if [ -f "$FILE" ]; then
      OUT="${FILE%.*}.webm"
      konsole --hold -e ffmpeg -i "$FILE" -c:v libvpx-vp9 -crf 30 -b:v 0 "$OUT" &
    else
      kdialog --title "Regata OS - Conversão" --passivepopup "Nenhum arquivo de vídeo selecionado no Dolphin." 3 &
    fi
    ;;

  convert-gif)
    FILE=$(get_dolphin_file)
    if [ -f "$FILE" ]; then
      OUT="${FILE%.*}.gif"
      konsole --hold -e ffmpeg -i "$FILE" -vf "fps=15,scale=480:-1:flags=lanczos" "$OUT" &
    else
      kdialog --title "Regata OS - Conversão" --passivepopup "Nenhum arquivo de vídeo selecionado no Dolphin." 3 &
    fi
    ;;

  extract-mp3)
    FILE=$(get_dolphin_file)
    if [ -f "$FILE" ]; then
      OUT="${FILE%.*}.mp3"
      konsole --hold -e ffmpeg -i "$FILE" -q:a 0 -map a "$OUT" &
    else
      kdialog --title "Regata OS - Conversão" --passivepopup "Nenhum arquivo de mídia selecionado no Dolphin." 3 &
    fi
    ;;

  compress-zstd)
    FILE=$(get_dolphin_file)
    if [ -e "$FILE" ]; then
      DIR=$(dirname "$FILE")
      BASE=$(basename "$FILE")
      (cd "$DIR" && tar -I zstd -cvf "${BASE}.tar.zst" "$BASE" && kdialog --title "Regata OS" --passivepopup "Arquivo ${BASE}.tar.zst criado com sucesso!" 3) &
    else
      kdialog --title "Regata OS - Compactar" --passivepopup "Selecione um arquivo ou pasta no Dolphin." 3 &
    fi
    ;;

  checksum)
    FILE=$(get_dolphin_file)
    if [ -f "$FILE" ]; then
      HASH=$(sha256sum "$FILE" | awk '{print $1}')
      kdialog --title "Integridade SHA-256" --msgbox "Arquivo: $(basename "$FILE")\n\nSHA-256:\n$HASH" &
    else
      kdialog --title "Regata OS - Checksum" --passivepopup "Selecione um arquivo no Dolphin." 3 &
    fi
    ;;

  copy-path)
    FILE=$(get_dolphin_file)
    if [ -n "$FILE" ]; then
      echo -n "$FILE" | xclip -selection clipboard
      kdialog --title "Regata OS" --passivepopup "Caminho copiado: $FILE" 2 &
    else
      local DOLPHIN_SVC
      DOLPHIN_SVC=$(qdbus6 2>/dev/null | grep -m1 "org.kde.dolphin-" | tr -d ' ')
      if [ -n "$DOLPHIN_SVC" ]; then
        qdbus6 "$DOLPHIN_SVC" /dolphin/Dolphin_1/actions/copy_location org.qtproject.Qt.QAction.trigger 2>/dev/null
      fi
    fi
    ;;

  kdeconnect)
    FILE=$(get_dolphin_file)
    if [ -e "$FILE" ]; then
      kdeconnect-app --share "$FILE" &
    else
      kdeconnect-app &
    fi
    ;;

  open-terminal)
    FILE=$(get_dolphin_file)
    if [ -d "$FILE" ]; then
      konsole --workdir "$FILE" &
    elif [ -f "$FILE" ]; then
      konsole --workdir "$(dirname "$FILE")" &
    else
      konsole &
    fi
    ;;

  *)
    echo "Ação desconhecida: $ACTION"
    exit 1
    ;;
esac
