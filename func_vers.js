function compareVersions(version1, version2) {
    // Разделяем версии на части
    let parts1 = version1.split('.');
    let parts2 = version2.split('.');

    // Преобразуем части в числа
    let major1 = parseInt(parts1[0]);
    let minor1 = parseInt(parts1[1]);
    let major2 = parseInt(parts2[0]);
    let minor2 = parseInt(parts2[1]);

    // Сравниваем мажорные и минорные части
    if (major1 > major2) {
        return 1;
    } else if (major1 < major2) {
        return -1;
    } else {
        // Если мажорные части равны, сравниваем минорные
        if (minor1 > minor2) {
            return 1;
        } else if (minor1 < minor2) {
            return -1;
        } else {
            // Если и минорные части равны, версии равны
            return 0;
        }
    }
} 

module.exports = compareVersions
/*  console.log(compareVersions("0.1", "0.2")); //-1
console.log(compareVersions("0.2", "0.1")); // 1
console.log(compareVersions("4.2", "4.2")); // 0 
*/ 