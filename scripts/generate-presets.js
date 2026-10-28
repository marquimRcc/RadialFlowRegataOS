const fs = require('fs');
const path = require('path');

const actionHelper = '/usr/lib/kando/scripts/regataos-action.sh';
const fallbackHelper = '~/.config/kando/scripts/regataos-action.sh';
const switchHelper = '/usr/lib/kando/scripts/regataos-switch-icons.sh';
const fallbackSwitch = '~/.config/kando/scripts/regataos-switch-icons.sh';

function buildMenuTree(iconTheme, iconMap) {
  return [
    // 1. Menu Dolphin & Arquivos
    {
      shortcut: "Control+Space",
      shortcutID: "regataos-menu",
      useFixedPosition: false,
      fixedMenuPosition: { x: 0.5, y: 0.5 },
      conditions: {
        appName: "dolphin"
      },
      root: {
        type: "root",
        name: "Dolphin & Arquivos",
        icon: iconMap.dolphinRoot,
        iconTheme: iconTheme,
        activateWorkflow: {
          quickSelectKey: "Backspace",
          actions: [{ type: "close-menu" }]
        },
        children: [
          {
            type: "submenu",
            name: "Converter Vídeo",
            icon: iconMap.videoSubmenu,
            iconTheme: iconTheme,
            openWorkflow: { quickSelectKey: "V", actions: [] },
            activateWorkflow: { quickSelectKey: "Backspace", actions: [{ type: "close-submenu" }] },
            children: [
              {
                type: "button",
                name: "Para MP4",
                icon: iconMap.mp4,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "M",
                  actions: [
                    { type: "execute-command", command: `${actionHelper} convert-mp4 || ${fallbackHelper} convert-mp4`, detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              },
              {
                type: "button",
                name: "Para WebM",
                icon: iconMap.webm,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "W",
                  actions: [
                    { type: "execute-command", command: `${actionHelper} convert-webm || ${fallbackHelper} convert-webm`, detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              },
              {
                type: "button",
                name: "Para GIF",
                icon: iconMap.gif,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "G",
                  actions: [
                    { type: "execute-command", command: `${actionHelper} convert-gif || ${fallbackHelper} convert-gif`, detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              },
              {
                type: "button",
                name: "Extrair Áudio MP3",
                icon: iconMap.audio,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "A",
                  actions: [
                    { type: "execute-command", command: `${actionHelper} extract-mp3 || ${fallbackHelper} extract-mp3`, detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              }
            ]
          },
          {
            type: "button",
            name: "Compactar (.tar.zst)",
            icon: iconMap.compress,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "Z",
              actions: [
                { type: "execute-command", command: `${actionHelper} compress-zstd || ${fallbackHelper} compress-zstd`, detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Abrir Konsole Aqui",
            icon: iconMap.terminal,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "T",
              actions: [
                { type: "execute-command", command: `${actionHelper} open-terminal || ${fallbackHelper} open-terminal`, detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "KDE Connect",
            icon: iconMap.kdeconnect,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "K",
              actions: [
                { type: "execute-command", command: `${actionHelper} kdeconnect || ${fallbackHelper} kdeconnect`, detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Checksum SHA-256",
            icon: iconMap.checksum,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "S",
              actions: [
                { type: "execute-command", command: `${actionHelper} checksum || ${fallbackHelper} checksum`, detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Copiar Caminho",
            icon: iconMap.copy,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "C",
              actions: [
                { type: "execute-command", command: `${actionHelper} copy-path || ${fallbackHelper} copy-path`, detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Propriedades",
            icon: iconMap.info,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "P",
              actions: [
                { type: "execute-command", command: "bash -c 'qdbus6 $(qdbus6 | grep -m1 org.kde.dolphin- | tr -d \" \") /dolphin/Dolphin_1/actions/properties org.qtproject.Qt.QAction.trigger'", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Mover para Lixeira",
            icon: iconMap.trash,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "L",
              actions: [
                { type: "execute-command", command: "bash -c 'qdbus6 $(qdbus6 | grep -m1 org.kde.dolphin- | tr -d \" \") /dolphin/Dolphin_1/actions/movetotrash org.qtproject.Qt.QAction.trigger'", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          }
        ]
      }
    },

    // 2. Menu Gaming HUD
    {
      shortcut: "Control+Space",
      shortcutID: "regataos-menu",
      useFixedPosition: false,
      fixedMenuPosition: { x: 0.5, y: 0.5 },
      conditions: {
        appName: "/steam|steam_app|heroic|lutris|retroarch|gamescope|wine/i"
      },
      root: {
        type: "root",
        name: "Gaming HUD",
        icon: iconMap.gamingRoot,
        iconTheme: iconTheme,
        activateWorkflow: {
          quickSelectKey: "Backspace",
          actions: [{ type: "close-menu" }]
        },
        children: [
          {
            type: "button",
            name: "Capturar Tela",
            icon: iconMap.spectacle,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "C",
              actions: [
                { type: "execute-command", command: "spectacle -b -n -c", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "submenu",
            name: "Gravar Replay",
            icon: iconMap.replaySubmenu,
            iconTheme: iconTheme,
            openWorkflow: { quickSelectKey: "R", actions: [] },
            activateWorkflow: { quickSelectKey: "Backspace", actions: [{ type: "close-submenu" }] },
            children: [
              {
                type: "button",
                name: "Últimos 30s",
                icon: iconMap.replay30s,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "3",
                  actions: [
                    { type: "execute-command", command: "gpu-screen-recorder --replay 30s || kdialog --passivepopup 'Replay 30s gravado!' 2", detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              },
              {
                type: "button",
                name: "Últimos 2 Minutos",
                icon: iconMap.replay2m,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "2",
                  actions: [
                    { type: "execute-command", command: "gpu-screen-recorder --replay 120s || kdialog --passivepopup 'Replay 2m gravado!' 2", detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              },
              {
                type: "button",
                name: "Gravação Contínua",
                icon: iconMap.recordContinuous,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "G",
                  actions: [
                    { type: "execute-command", command: "obs --startrecording || kdialog --passivepopup 'Gravando...' 2", detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              }
            ]
          },
          {
            type: "button",
            name: "GameMode Desempenho",
            icon: iconMap.performance,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "D",
              actions: [
                { type: "execute-command", command: "bash -c 'powerprofilesctl set performance 2>/dev/null; kdialog --passivepopup \"Perfil Desempenho Ativado\" 2'", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Gamescope / FSR",
            icon: iconMap.gamescope,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "F",
              actions: [
                { type: "execute-command", command: "gamescope -U -F fsr || true", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Alternar Áudio",
            icon: iconMap.audioToggle,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "A",
              actions: [
                { type: "execute-command", command: "bash -c 'pactl set-default-sink $(pactl list short sinks | awk \"{print \\$2}\" | tail -n1); kdialog --passivepopup \"Dispositivo de áudio alternado\" 2'", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Discord",
            icon: iconMap.discord,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "I",
              actions: [
                { type: "execute-command", command: "flatpak run com.discordapp.Discord || discord || true", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Game Access",
            icon: iconMap.gameAccess,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "G",
              actions: [
                { type: "execute-command", command: "regataos-gcs", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Max-Q",
            icon: iconMap.maxq,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "M",
              actions: [
                { type: "execute-command", command: "prime-settings", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          }
        ]
      }
    },

    // 3. Menu Regata OS (Desktop & Geral)
    {
      shortcut: "Control+Space",
      shortcutID: "regataos-menu",
      useFixedPosition: false,
      fixedMenuPosition: { x: 0.5, y: 0.5 },
      root: {
        type: "root",
        name: "Regata OS",
        icon: iconMap.regataRoot,
        iconTheme: iconTheme,
        activateWorkflow: {
          quickSelectKey: "Backspace",
          actions: [{ type: "close-menu" }]
        },
        children: [
          {
            type: "button",
            name: "Adicionar Widgets",
            icon: iconMap.widgets,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "W",
              actions: [
                { type: "execute-command", command: "qdbus6 org.kde.plasmashell /PlasmaShell org.kde.PlasmaShell.toggleWidgetExplorer", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Game Access",
            icon: iconMap.gameAccess,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "G",
              actions: [
                { type: "execute-command", command: "regataos-gcs", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Regata OS Update",
            icon: iconMap.update,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "U",
              actions: [
                { type: "execute-command", command: "regataos-update-manager", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Max-Q",
            icon: iconMap.maxq,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "M",
              actions: [
                { type: "execute-command", command: "prime-settings", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Suporte Regata OS",
            icon: iconMap.support,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "S",
              actions: [
                { type: "execute-command", command: "regataos-help", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Regata OS Store",
            icon: iconMap.store,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "L",
              actions: [
                { type: "execute-command", command: "regataos-store", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "button",
            name: "Capturar Tela",
            icon: iconMap.spectacle,
            iconTheme: iconTheme,
            selectWorkflow: {
              quickSelectKey: "C",
              actions: [
                { type: "execute-command", command: "spectacle -b -n -c", detached: true, isolated: false },
                { type: "close-menu" }
              ]
            }
          },
          {
            type: "submenu",
            name: "Estilo de Ícones",
            icon: iconMap.iconThemeSubmenu,
            iconTheme: iconTheme,
            openWorkflow: { quickSelectKey: "I", actions: [] },
            activateWorkflow: { quickSelectKey: "Backspace", actions: [{ type: "close-submenu" }] },
            children: [
              {
                type: "button",
                name: "1. Minimalista (Branco)",
                icon: iconMap.optMinimal,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "1",
                  actions: [
                    { type: "execute-command", command: `${switchHelper} minimal || ${fallbackSwitch} minimal`, detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              },
              {
                type: "button",
                name: "2. Nativos do SO",
                icon: iconMap.optSystem,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "2",
                  actions: [
                    { type: "execute-command", command: `${switchHelper} system || ${fallbackSwitch} system`, detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              },
              {
                type: "button",
                name: "3. Cyber Gaming Neon",
                icon: iconMap.optNeon,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "3",
                  actions: [
                    { type: "execute-command", command: `${switchHelper} neon || ${fallbackSwitch} neon`, detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              }
            ]
          },
          {
            type: "submenu",
            name: "Janelas & Controle",
            icon: iconMap.windowControl,
            iconTheme: iconTheme,
            openWorkflow: { quickSelectKey: "J", actions: [] },
            activateWorkflow: { quickSelectKey: "Backspace", actions: [{ type: "close-submenu" }] },
            children: [
              {
                type: "button",
                name: "Maximizar",
                icon: iconMap.maximize,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "M",
                  actions: [
                    { type: "execute-command", command: "qdbus6 org.kde.kglobalaccel /component/kwin invokeShortcut 'Window Maximize'", detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              },
              {
                type: "button",
                name: "Snap Esquerda",
                icon: iconMap.tileLeft,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "E",
                  actions: [
                    { type: "execute-command", command: "qdbus6 org.kde.kglobalaccel /component/kwin invokeShortcut 'Window Quick Tile Left'", detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              },
              {
                type: "button",
                name: "Snap Direita",
                icon: iconMap.tileRight,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "D",
                  actions: [
                    { type: "execute-command", command: "qdbus6 org.kde.kglobalaccel /component/kwin invokeShortcut 'Window Quick Tile Right'", detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              },
              {
                type: "button",
                name: "Configurações",
                icon: iconMap.settings,
                iconTheme: iconTheme,
                selectWorkflow: {
                  quickSelectKey: "C",
                  actions: [
                    { type: "execute-command", command: "systemsettings", detached: true, isolated: false },
                    { type: "close-menu" }
                  ]
                }
              }
            ]
          }
        ]
      }
    }
  ];
}

// Mapas de ícones para cada um dos 3 estilos:
const minimalIcons = {
  dolphinRoot: "folder_open",
  videoSubmenu: "movie",
  mp4: "videocam",
  webm: "language",
  gif: "gif",
  audio: "audio_file",
  compress: "folder_zip",
  terminal: "terminal",
  kdeconnect: "phonelink",
  checksum: "security",
  copy: "content_copy",
  info: "info",
  trash: "delete",
  gamingRoot: "sports_esports",
  spectacle: "photo_camera",
  replaySubmenu: "videocam",
  replay30s: "timer",
  replay2m: "movie_edit",
  recordContinuous: "fiber_manual_record",
  performance: "bolt",
  gamescope: "zoom_in",
  audioToggle: "headphones",
  discord: "chat",
  gameAccess: "sports_esports",
  maxq: "speed",
  regataRoot: "apps",
  widgets: "widgets",
  update: "update",
  support: "help",
  store: "storefront",
  iconThemeSubmenu: "palette",
  optMinimal: "contrast",
  optSystem: "desktop_windows",
  optNeon: "sports_esports",
  windowControl: "dashboard_customize",
  maximize: "fullscreen",
  tileLeft: "arrow_left_alt",
  tileRight: "arrow_right_alt",
  settings: "settings"
};

const systemIcons = {
  dolphinRoot: "org.kde.dolphin",
  videoSubmenu: "video-x-generic",
  mp4: "video-x-generic",
  webm: "video-x-generic",
  gif: "image-x-generic",
  audio: "audio-x-generic",
  compress: "package-x-generic",
  terminal: "utilities-terminal",
  kdeconnect: "kdeconnect",
  checksum: "security-high",
  copy: "edit-copy",
  info: "dialog-information",
  trash: "user-trash",
  gamingRoot: "applications-games",
  spectacle: "spectacle",
  replaySubmenu: "video-x-generic",
  replay30s: "clock",
  replay2m: "video-x-generic",
  recordContinuous: "media-record",
  performance: "speedometer",
  gamescope: "video-display",
  audioToggle: "audio-headset",
  discord: "com.discordapp.Discord",
  gameAccess: "regataos-gcs",
  maxq: "Max-q",
  regataRoot: "start-here-kde",
  widgets: "plasma",
  update: "regataos-update-manager",
  support: "regataos-support",
  store: "regataos-store-icon",
  iconThemeSubmenu: "preferences-desktop-theme",
  optMinimal: "draw-brush",
  optSystem: "start-here-kde",
  optNeon: "applications-games",
  windowControl: "preferences-system-windows",
  maximize: "window",
  tileLeft: "go-previous",
  tileRight: "go-next",
  settings: "preferences-system"
};

const neonIcons = {
  dolphinRoot: "folder.svg",
  videoSubmenu: "movie.svg",
  mp4: "videocam.svg",
  webm: "language.svg",
  gif: "gif.svg",
  audio: "audio.svg",
  compress: "archive.svg",
  terminal: "terminal.svg",
  kdeconnect: "phone.svg",
  checksum: "shield.svg",
  copy: "copy.svg",
  info: "info.svg",
  trash: "trash.svg",
  gamingRoot: "gamepad.svg",
  spectacle: "camera.svg",
  replaySubmenu: "replay.svg",
  replay30s: "timer.svg",
  replay2m: "movie_edit.svg",
  recordContinuous: "record.svg",
  performance: "lightning.svg",
  gamescope: "scale.svg",
  audioToggle: "headphones.svg",
  discord: "chat.svg",
  gameAccess: "gamepad.svg",
  maxq: "speed.svg",
  regataRoot: "regataos.svg",
  widgets: "widgets.svg",
  update: "update.svg",
  support: "help.svg",
  store: "store.svg",
  iconThemeSubmenu: "palette.svg",
  optMinimal: "palette.svg",
  optSystem: "regataos.svg",
  optNeon: "gamepad.svg",
  windowControl: "window.svg",
  maximize: "maximize.svg",
  tileLeft: "tile-left.svg",
  tileRight: "tile-right.svg",
  settings: "settings.svg"
};

const presets = [
  { name: 'minimal', theme: 'material-symbols-rounded', icons: minimalIcons },
  { name: 'system', theme: 'system', icons: systemIcons },
  { name: 'neon', theme: 'regataos-neon', icons: neonIcons }
];

const outDir = path.resolve(__dirname, '../assets/menu-presets');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

for (const p of presets) {
  const content = {
    version: "3.0.1",
    menus: buildMenuTree(p.theme, p.icons)
  };
  const jsonPath = path.join(outDir, `${p.name}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(content, null, 2));
  console.log(`Generated preset: ${jsonPath}`);

  // Also write to ~/.config/kando/presets
  const userPresetsDir = path.join(process.env.HOME, '.config/kando/presets');
  if (!fs.existsSync(userPresetsDir)) fs.mkdirSync(userPresetsDir, { recursive: true });
  fs.writeFileSync(path.join(userPresetsDir, `${p.name}.json`), JSON.stringify(content, null, 2));
}

// Update src/main/example-menus/regataos.json to use the default 'system' preset (full native color icons)
const defaultSystemContent = buildMenuTree('system', systemIcons);
fs.writeFileSync(
  path.resolve(__dirname, '../src/main/example-menus/regataos.json'),
  JSON.stringify(defaultSystemContent, null, 2)
);
console.log('Updated src/main/example-menus/regataos.json with native system icons!');
