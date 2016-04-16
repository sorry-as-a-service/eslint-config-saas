module.exports = {
    'extends': ['angular'],
    'env': {
        'jasmine': true,
        'protractor': true,
        'commonjs': true
    },
    'rules': {
        'angular/no-service-method': 0,
        'angular/controller-as-vm': 0,
        'angular/on-watch': 0,
        'angular/document-service': 0,
        'angular/window-service': 0,
        'angular/json-functions': 0,
        'angular/timeout-service': 0,
        'angular/definedundefined': 0,
        'angular/angularelement': 0,
        'angular/interval-service': 0
    },
    'globals': {
        'inject': false
    }
};
