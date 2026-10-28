// SPDX-FileCopyrightText: 2026 Regata OS Team
// SPDX-License-Identifier: MIT

import installer from 'electron-installer-redhat';
import path from 'node:path';
import fs from 'node:fs';

const projectRoot = path.resolve(import.meta.dirname, '../..');
const srcDir = path.join(projectRoot, 'out/Kando-linux-x64');
const destDir = path.join(projectRoot, 'out/make/rpm/x64');

if (!fs.existsSync(srcDir)) {
  console.error(`Diretório do app empacotado não encontrado em: ${srcDir}`);
  console.error('Execute primeiro: npm run package');
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });

const pkgJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));

console.log('Gerando pacote RPM para o Regata OS...');

const options = {
  src: srcDir,
  dest: destDir,
  arch: 'x86_64',
  name: 'kando',
  productName: 'Kando',
  genericName: 'Radial Menu',
  description: pkgJson.description || 'Menu radial contextual para o Regata OS',
  productDescription: pkgJson.description || 'Menu radial contextual para o Regata OS',
  version: pkgJson.version || '3.0.1',
  revision: 1,
  license: 'MIT',
  icon: path.join(projectRoot, 'assets/icons/icon.svg'),
  homepage: 'https://github.com/marquimRcc/RadialFlowRegataOS',
  requires: ['libXtst'],
  categories: ['Utility', 'System'],
  specTemplate: path.join(projectRoot, 'packaging/rpm/kando.spec.ejs')
};

try {
  await installer(options);
  console.log(`Pacote RPM gerado com sucesso em: ${destDir}`);
} catch (err) {
  console.error('Falha ao gerar o pacote RPM:', err);
  process.exit(1);
}
