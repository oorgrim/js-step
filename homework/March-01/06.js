let flash_gb = +prompt('введите объем флешки (в гб)')
let file_size_mb = 820
let files_count = Math.floor(flash_gb * 1024 / file_size_mb);

console.log(`на флешку объемом ${flash_gb}гб поместится ${files_count} файлов размером в ${file_size_mb}мб`);