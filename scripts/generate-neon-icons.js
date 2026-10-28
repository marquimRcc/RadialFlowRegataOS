const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, '../assets/icon-themes/regataos-neon');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const icons = {
  'folder.svg': `
    <defs>
      <linearGradient id="g_folder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#0066FF" />
      </linearGradient>
    </defs>
    <path d="M6 12C6 9.8 7.8 8 10 8H18L22 13H38C40.2 13 42 14.8 42 17V36C42 38.2 40.2 40 38 40H10C7.8 40 6 38.2 6 36V12Z" fill="url(#g_folder)" fill-opacity="0.2" stroke="url(#g_folder)" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M6 18H42" stroke="url(#g_folder)" stroke-width="2" stroke-opacity="0.8" />
    <circle cx="14" cy="28" r="3" fill="#00F5FF" />
    <line x1="22" y1="28" x2="34" y2="28" stroke="#00F5FF" stroke-width="2.5" stroke-linecap="round" />
  `,

  'movie.svg': `
    <defs>
      <linearGradient id="g_movie" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF007F" />
        <stop offset="100%" stop-color="#7928CA" />
      </linearGradient>
    </defs>
    <rect x="6" y="10" width="36" height="28" rx="6" fill="url(#g_movie)" fill-opacity="0.2" stroke="url(#g_movie)" stroke-width="2.5" />
    <path d="M6 18H42" stroke="url(#g_movie)" stroke-width="2" />
    <path d="M12 10L16 18M22 10L26 18M32 10L36 18" stroke="url(#g_movie)" stroke-width="2" stroke-linecap="round" />
    <polygon points="21,24 31,29 21,34" fill="#FF007F" />
  `,

  'videocam.svg': `
    <defs>
      <linearGradient id="g_videocam" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#00B4D8" />
      </linearGradient>
    </defs>
    <rect x="6" y="12" width="24" height="24" rx="5" fill="url(#g_videocam)" fill-opacity="0.2" stroke="url(#g_videocam)" stroke-width="2.5" />
    <path d="M30 20L42 14V34L30 28" fill="url(#g_videocam)" fill-opacity="0.4" stroke="url(#g_videocam)" stroke-width="2.5" stroke-linejoin="round" />
    <circle cx="18" cy="24" r="4" fill="#00F5FF" />
  `,

  'language.svg': `
    <defs>
      <linearGradient id="g_lang" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00FF88" />
        <stop offset="100%" stop-color="#0099FF" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#g_lang)" fill-opacity="0.15" stroke="url(#g_lang)" stroke-width="2.5" />
    <ellipse cx="24" cy="24" rx="8" ry="18" fill="none" stroke="url(#g_lang)" stroke-width="2" />
    <line x1="6" y1="24" x2="42" y2="24" stroke="url(#g_lang)" stroke-width="2" />
    <line x1="9" y1="15" x2="39" y2="15" stroke="url(#g_lang)" stroke-width="1.8" />
    <line x1="9" y1="33" x2="39" y2="33" stroke="url(#g_lang)" stroke-width="1.8" />
  `,

  'gif.svg': `
    <defs>
      <linearGradient id="g_gif" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFAA00" />
        <stop offset="100%" stop-color="#FF0055" />
      </linearGradient>
    </defs>
    <rect x="6" y="12" width="36" height="24" rx="6" fill="url(#g_gif)" fill-opacity="0.2" stroke="url(#g_gif)" stroke-width="2.5" />
    <path d="M14 21C13.5 19 15 18 16.5 18C18 18 19 19 19 20V24C19 25.5 18 26.5 16.5 26.5C14.5 26.5 13.5 25 13.5 23H17" fill="none" stroke="#FFAA00" stroke-width="2" stroke-linecap="round" />
    <line x1="23" y1="18" x2="23" y2="26.5" stroke="#FFAA00" stroke-width="2.5" stroke-linecap="round" />
    <path d="M27 18H33M27 22H31M27 18V26.5" fill="none" stroke="#FFAA00" stroke-width="2" stroke-linecap="round" />
  `,

  'audio.svg': `
    <defs>
      <linearGradient id="g_audio" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00FF88" />
        <stop offset="100%" stop-color="#14F195" />
      </linearGradient>
    </defs>
    <path d="M12 28V20M18 34V14M24 38V10M30 32V16M36 26V22" stroke="url(#g_audio)" stroke-width="3" stroke-linecap="round" />
    <circle cx="24" cy="24" r="20" fill="url(#g_audio)" fill-opacity="0.1" stroke="url(#g_audio)" stroke-width="2" stroke-dasharray="4 4" />
  `,

  'archive.svg': `
    <defs>
      <linearGradient id="g_arch" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF9E00" />
        <stop offset="100%" stop-color="#FF5400" />
      </linearGradient>
    </defs>
    <rect x="6" y="8" width="36" height="10" rx="3" fill="url(#g_arch)" fill-opacity="0.3" stroke="url(#g_arch)" stroke-width="2.5" />
    <path d="M9 18V36C9 38.2 10.8 40 13 40H35C37.2 40 39 38.2 39 36V18" fill="url(#g_arch)" fill-opacity="0.15" stroke="url(#g_arch)" stroke-width="2.5" />
    <rect x="20" y="24" width="8" height="6" rx="2" fill="#FF9E00" />
  `,

  'terminal.svg': `
    <defs>
      <linearGradient id="g_term" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00FF88" />
        <stop offset="100%" stop-color="#00CC66" />
      </linearGradient>
    </defs>
    <rect x="6" y="9" width="36" height="30" rx="6" fill="#0A0E17" stroke="url(#g_term)" stroke-width="2.5" />
    <path d="M13 18L19 24L13 30" fill="none" stroke="url(#g_term)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <line x1="23" y1="30" x2="33" y2="30" stroke="url(#g_term)" stroke-width="2.5" stroke-linecap="round" />
  `,

  'phone.svg': `
    <defs>
      <linearGradient id="g_phone" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#9945FF" />
      </linearGradient>
    </defs>
    <rect x="13" y="6" width="22" height="36" rx="5" fill="url(#g_phone)" fill-opacity="0.2" stroke="url(#g_phone)" stroke-width="2.5" />
    <circle cx="24" cy="36" r="2" fill="#00F5FF" />
    <line x1="20" y1="10" x2="28" y2="10" stroke="#00F5FF" stroke-width="2" stroke-linecap="round" />
    <path d="M38 18C40 20 40 24 38 26" stroke="#00F5FF" stroke-width="2" stroke-linecap="round" />
    <path d="M10 18C8 20 8 24 10 26" stroke="#00F5FF" stroke-width="2" stroke-linecap="round" />
  `,

  'shield.svg': `
    <defs>
      <linearGradient id="g_shield" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#0077FE" />
      </linearGradient>
    </defs>
    <path d="M24 6L39 12V22C39 31.5 32.5 39.5 24 42C15.5 39.5 9 31.5 9 22V12L24 6Z" fill="url(#g_shield)" fill-opacity="0.2" stroke="url(#g_shield)" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M17 22L22 27L31 18" fill="none" stroke="#00F5FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  `,

  'copy.svg': `
    <defs>
      <linearGradient id="g_copy" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#14F195" />
      </linearGradient>
    </defs>
    <rect x="15" y="15" width="24" height="24" rx="4" fill="url(#g_copy)" fill-opacity="0.2" stroke="url(#g_copy)" stroke-width="2.5" />
    <path d="M33 11V9C33 7.9 32.1 7 31 7H11C9.9 7 9 7.9 9 9V29C9 30.1 9.9 31 11 31H13" fill="none" stroke="url(#g_copy)" stroke-width="2.2" stroke-linecap="round" />
  `,

  'info.svg': `
    <defs>
      <linearGradient id="g_info" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#00A3FF" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#g_info)" fill-opacity="0.2" stroke="url(#g_info)" stroke-width="2.5" />
    <circle cx="24" cy="16" r="2.5" fill="#00F5FF" />
    <line x1="24" y1="21" x2="24" y2="32" stroke="#00F5FF" stroke-width="3" stroke-linecap="round" />
  `,

  'trash.svg': `
    <defs>
      <linearGradient id="g_trash" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF0055" />
        <stop offset="100%" stop-color="#FF5400" />
      </linearGradient>
    </defs>
    <path d="M8 12H40M19 12V8C19 6.9 19.9 6 21 6H27C28.1 6 29 6.9 29 8V12M12 12L15 39C15.2 40.7 16.6 42 18.3 42H29.7C31.4 42 32.8 40.7 33 39L36 12" fill="url(#g_trash)" fill-opacity="0.2" stroke="url(#g_trash)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <line x1="20" y1="18" x2="20" y2="34" stroke="url(#g_trash)" stroke-width="2" stroke-linecap="round" />
    <line x1="28" y1="18" x2="28" y2="34" stroke="url(#g_trash)" stroke-width="2" stroke-linecap="round" />
  `,

  'gamepad.svg': `
    <defs>
      <linearGradient id="g_gamepad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="50%" stop-color="#9945FF" />
        <stop offset="100%" stop-color="#FF007F" />
      </linearGradient>
    </defs>
    <path d="M14 14H34C39 14 43 18 42 24L39 36C38 40 33 41 30 38L25 33H23L18 38C15 41 10 40 9 36L6 24C5 18 9 14 14 14Z" fill="url(#g_gamepad)" fill-opacity="0.2" stroke="url(#g_gamepad)" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M12 24H18M15 21V27" stroke="#00F5FF" stroke-width="2.5" stroke-linecap="round" />
    <circle cx="31" cy="22" r="2" fill="#FF007F" />
    <circle cx="35" cy="26" r="2" fill="#FFAA00" />
    <circle cx="27" cy="26" r="2" fill="#00FF88" />
    <circle cx="31" cy="30" r="2" fill="#00F5FF" />
  `,

  'camera.svg': `
    <defs>
      <linearGradient id="g_cam" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF007F" />
        <stop offset="100%" stop-color="#00F5FF" />
      </linearGradient>
    </defs>
    <path d="M6 14C6 11.8 7.8 10 10 10H14L17 6H31L34 10H38C40.2 10 42 11.8 42 14V36C42 38.2 40.2 40 38 40H10C7.8 40 6 38.2 6 36V14Z" fill="url(#g_cam)" fill-opacity="0.2" stroke="url(#g_cam)" stroke-width="2.5" stroke-linejoin="round" />
    <circle cx="24" cy="25" r="8" fill="none" stroke="url(#g_cam)" stroke-width="2.5" />
    <circle cx="24" cy="25" r="3" fill="#00F5FF" />
  `,

  'replay.svg': `
    <defs>
      <linearGradient id="g_rep" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#14F195" />
      </linearGradient>
    </defs>
    <path d="M9 22C9 14.3 15.3 8 23 8C30.7 8 37 14.3 37 22C37 29.7 30.7 36 23 36H16" fill="none" stroke="url(#g_rep)" stroke-width="2.5" stroke-linecap="round" />
    <polyline points="13,17 8,22 13,27" fill="none" stroke="url(#g_rep)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <polygon points="21,17 28,22 21,27" fill="#00F5FF" />
  `,

  'timer.svg': `
    <defs>
      <linearGradient id="g_timer" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFAA00" />
        <stop offset="100%" stop-color="#FF007F" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="26" r="16" fill="url(#g_timer)" fill-opacity="0.2" stroke="url(#g_timer)" stroke-width="2.5" />
    <line x1="24" y1="6" x2="24" y2="10" stroke="url(#g_timer)" stroke-width="2.5" stroke-linecap="round" />
    <line x1="24" y1="26" x2="24" y2="16" stroke="#FFAA00" stroke-width="2.5" stroke-linecap="round" />
    <line x1="24" y1="26" x2="31" y2="26" stroke="#FFAA00" stroke-width="2.5" stroke-linecap="round" />
  `,

  'movie_edit.svg': `
    <defs>
      <linearGradient id="g_medit" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#9945FF" />
        <stop offset="100%" stop-color="#FF007F" />
      </linearGradient>
    </defs>
    <rect x="6" y="8" width="26" height="32" rx="4" fill="url(#g_medit)" fill-opacity="0.2" stroke="url(#g_medit)" stroke-width="2.5" />
    <line x1="6" y1="16" x2="32" y2="16" stroke="url(#g_medit)" stroke-width="2" />
    <line x1="6" y1="32" x2="32" y2="32" stroke="url(#g_medit)" stroke-width="2" />
    <path d="M38 18L30 26L28 32L34 30L42 22C43 21 43 19 42 18C41 17 39 17 38 18Z" fill="#FF007F" stroke="#FFFFFF" stroke-width="1.5" />
  `,

  'record.svg': `
    <defs>
      <radialGradient id="g_rec">
        <stop offset="0%" stop-color="#FF0055" />
        <stop offset="100%" stop-color="#B3002D" />
      </radialGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="none" stroke="#FF0055" stroke-width="2.5" stroke-dasharray="6 4" />
    <circle cx="24" cy="24" r="11" fill="url(#g_rec)" />
  `,

  'lightning.svg': `
    <defs>
      <linearGradient id="g_light" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFE600" />
        <stop offset="100%" stop-color="#FF5500" />
      </linearGradient>
    </defs>
    <polygon points="26,4 12,25 23,25 18,44 36,20 25,20" fill="url(#g_light)" stroke="#FFE600" stroke-width="1.5" stroke-linejoin="round" />
  `,

  'scale.svg': `
    <defs>
      <linearGradient id="g_scale" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#00FF88" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#g_scale)" fill-opacity="0.1" stroke="url(#g_scale)" stroke-width="2.5" />
    <line x1="24" y1="6" x2="24" y2="14" stroke="#00F5FF" stroke-width="2.5" stroke-linecap="round" />
    <line x1="24" y1="34" x2="24" y2="42" stroke="#00F5FF" stroke-width="2.5" stroke-linecap="round" />
    <line x1="6" y1="24" x2="14" y2="24" stroke="#00F5FF" stroke-width="2.5" stroke-linecap="round" />
    <line x1="34" y1="24" x2="42" y2="24" stroke="#00F5FF" stroke-width="2.5" stroke-linecap="round" />
    <circle cx="24" cy="24" r="6" fill="none" stroke="#00FF88" stroke-width="2" />
  `,

  'headphones.svg': `
    <defs>
      <linearGradient id="g_head" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#7928CA" />
      </linearGradient>
    </defs>
    <path d="M8 26C8 16.5 15.2 9 24 9C32.8 9 40 16.5 40 26" fill="none" stroke="url(#g_head)" stroke-width="3" stroke-linecap="round" />
    <rect x="6" y="24" width="7" height="15" rx="3.5" fill="#00F5FF" />
    <rect x="35" y="24" width="7" height="15" rx="3.5" fill="#00F5FF" />
  `,

  'chat.svg': `
    <defs>
      <linearGradient id="g_chat" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#5865F2" />
        <stop offset="100%" stop-color="#7289DA" />
      </linearGradient>
    </defs>
    <path d="M40 24C40 32.8 32.8 40 24 40C20.5 40 17.3 38.9 14.6 37L6 40L9 32.8C7.1 30.3 6 27.3 6 24C6 15.2 13.2 8 24 8C32.8 8 40 15.2 40 24Z" fill="url(#g_chat)" fill-opacity="0.25" stroke="url(#g_chat)" stroke-width="2.5" stroke-linejoin="round" />
    <circle cx="16" cy="24" r="2.5" fill="#5865F2" />
    <circle cx="24" cy="24" r="2.5" fill="#5865F2" />
    <circle cx="32" cy="24" r="2.5" fill="#5865F2" />
  `,

  'speed.svg': `
    <defs>
      <linearGradient id="g_speed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="50%" stop-color="#FFAA00" />
        <stop offset="100%" stop-color="#FF0055" />
      </linearGradient>
    </defs>
    <path d="M9 34C6.5 28.5 7.5 21.5 12 16.5C18 10 27.5 9.5 34 15C38.5 19 40.5 25.5 39 31.5" fill="none" stroke="url(#g_speed)" stroke-width="3" stroke-linecap="round" />
    <circle cx="24" cy="32" r="4" fill="#00F5FF" />
    <line x1="24" y1="32" x2="34" y2="20" stroke="#FF0055" stroke-width="3" stroke-linecap="round" />
  `,

  'regataos.svg': `
    <defs>
      <linearGradient id="g_regata" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="50%" stop-color="#0077FE" />
        <stop offset="100%" stop-color="#00FF88" />
      </linearGradient>
    </defs>
    <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" fill="url(#g_regata)" fill-opacity="0.2" stroke="url(#g_regata)" stroke-width="3" stroke-linejoin="round" />
    <polygon points="24,12 34,18 34,30 24,36 14,30 14,18" fill="url(#g_regata)" fill-opacity="0.4" stroke="#00F5FF" stroke-width="2" stroke-linejoin="round" />
    <circle cx="24" cy="24" r="4" fill="#00F5FF" />
  `,

  'widgets.svg': `
    <defs>
      <linearGradient id="g_wid" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#9945FF" />
      </linearGradient>
    </defs>
    <rect x="7" y="7" width="14" height="14" rx="4" fill="url(#g_wid)" fill-opacity="0.3" stroke="url(#g_wid)" stroke-width="2.5" />
    <rect x="27" y="7" width="14" height="14" rx="4" fill="url(#g_wid)" fill-opacity="0.3" stroke="url(#g_wid)" stroke-width="2.5" />
    <rect x="7" y="27" width="14" height="14" rx="4" fill="url(#g_wid)" fill-opacity="0.3" stroke="url(#g_wid)" stroke-width="2.5" />
    <circle cx="34" cy="34" r="7" fill="url(#g_wid)" fill-opacity="0.5" stroke="#00F5FF" stroke-width="2.5" />
  `,

  'update.svg': `
    <defs>
      <linearGradient id="g_upd" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00FF88" />
        <stop offset="100%" stop-color="#00F5FF" />
      </linearGradient>
    </defs>
    <path d="M12 24C12 17.4 17.4 12 24 12C28.5 12 32.4 14.5 34.4 18M36 24C36 30.6 30.6 36 24 36C19.5 36 15.6 33.5 13.6 30" fill="none" stroke="url(#g_upd)" stroke-width="3" stroke-linecap="round" />
    <polyline points="31,18 36,18 36,13" fill="none" stroke="url(#g_upd)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <polyline points="17,30 12,30 12,35" fill="none" stroke="url(#g_upd)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M24 19V29M20 25L24 29L28 25" stroke="#00FF88" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
  `,

  'help.svg': `
    <defs>
      <linearGradient id="g_help" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#7928CA" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#g_help)" fill-opacity="0.2" stroke="url(#g_help)" stroke-width="2.5" />
    <path d="M19 19C19 16.5 21 15 24 15C27 15 29 16.5 29 19C29 21.5 27 22.5 25 24C24 25 24 26 24 27" fill="none" stroke="#00F5FF" stroke-width="3" stroke-linecap="round" />
    <circle cx="24" cy="32" r="2" fill="#00F5FF" />
  `,

  'store.svg': `
    <defs>
      <linearGradient id="g_store" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF007F" />
        <stop offset="100%" stop-color="#00F5FF" />
      </linearGradient>
    </defs>
    <path d="M10 14L14 6H34L38 14M8 14H40L38 38C38 39.5 36.8 41 35.3 41H12.7C11.2 41 10 39.5 10 38L8 14Z" fill="url(#g_store)" fill-opacity="0.2" stroke="url(#g_store)" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M18 20V24C18 27.3 20.7 30 24 30C27.3 30 30 27.3 30 24V20" fill="none" stroke="url(#g_store)" stroke-width="2.5" stroke-linecap="round" />
  `,

  'window.svg': `
    <defs>
      <linearGradient id="g_win" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#0077FE" />
      </linearGradient>
    </defs>
    <rect x="7" y="11" width="34" height="26" rx="5" fill="url(#g_win)" fill-opacity="0.2" stroke="url(#g_win)" stroke-width="2.5" />
    <line x1="7" y1="18" x2="41" y2="18" stroke="url(#g_win)" stroke-width="2" />
    <circle cx="12" cy="14.5" r="1.5" fill="#FF0055" />
    <circle cx="17" cy="14.5" r="1.5" fill="#FFAA00" />
    <circle cx="22" cy="14.5" r="1.5" fill="#00FF88" />
  `,

  'maximize.svg': `
    <defs>
      <linearGradient id="g_max" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00FF88" />
        <stop offset="100%" stop-color="#00F5FF" />
      </linearGradient>
    </defs>
    <path d="M8 17V10C8 8.9 8.9 8 10 8H17M31 8H38C39.1 8 40 8.9 40 10V17M40 31V38C40 39.1 39.1 40 38 40H31M17 40H10C8.9 40 8 39.1 8 38V31" fill="none" stroke="url(#g_max)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  `,

  'tile-left.svg': `
    <defs>
      <linearGradient id="g_tleft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#0077FE" />
      </linearGradient>
    </defs>
    <rect x="6" y="9" width="36" height="30" rx="5" fill="none" stroke="#555577" stroke-width="2" />
    <rect x="6" y="9" width="18" height="30" rx="5" fill="url(#g_tleft)" fill-opacity="0.4" stroke="url(#g_tleft)" stroke-width="2.5" />
  `,

  'tile-right.svg': `
    <defs>
      <linearGradient id="g_tright" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#0077FE" />
      </linearGradient>
    </defs>
    <rect x="6" y="9" width="36" height="30" rx="5" fill="none" stroke="#555577" stroke-width="2" />
    <rect x="24" y="9" width="18" height="30" rx="5" fill="url(#g_tright)" fill-opacity="0.4" stroke="url(#g_tright)" stroke-width="2.5" />
  `,

  'settings.svg': `
    <defs>
      <linearGradient id="g_sett" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F5FF" />
        <stop offset="50%" stop-color="#7928CA" />
        <stop offset="100%" stop-color="#FF007F" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="8" fill="url(#g_sett)" fill-opacity="0.2" stroke="url(#g_sett)" stroke-width="2.5" />
    <path d="M24 6V10M24 38V42M6 24H10M38 24H42M11.3 11.3L14.1 14.1M33.9 33.9L36.7 36.7M11.3 36.7L14.1 33.9M33.9 14.1L36.7 11.3" stroke="url(#g_sett)" stroke-width="3" stroke-linecap="round" />
  `,

  'palette.svg': `
    <defs>
      <linearGradient id="g_pal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF007F" />
        <stop offset="50%" stop-color="#00F5FF" />
        <stop offset="100%" stop-color="#00FF88" />
      </linearGradient>
    </defs>
    <path d="M24 6C14 6 6 14 6 24C6 32 12 38 18 38C20 38 21 37 21 35C21 34 20.5 33 20.5 32C20.5 30 22 28 24 28H28C34.6 28 40 22.6 40 16C40 10.5 32.8 6 24 6Z" fill="url(#g_pal)" fill-opacity="0.2" stroke="url(#g_pal)" stroke-width="2.5" stroke-linejoin="round" />
    <circle cx="14" cy="18" r="2.5" fill="#FF007F" />
    <circle cx="22" cy="13" r="2.5" fill="#FFAA00" />
    <circle cx="30" cy="16" r="2.5" fill="#00FF88" />
    <circle cx="33" cy="23" r="2.5" fill="#00F5FF" />
  `
};

for (const [filename, content] of Object.entries(icons)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">${content.trim()}</svg>`;
  fs.writeFileSync(path.join(targetDir, filename), svg);
}

console.log(`Generated ${Object.keys(icons).length} neon icons in ${targetDir}`);
