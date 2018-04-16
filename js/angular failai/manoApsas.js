var app = angular.module('manoApsas', []);

app.controller('menuController', function($scope) {
    let vm = this;


    vm.meniu = [
        {url:'index.html', title: 'Pagrindinis'},
        {url:'Apiemane.html', title: 'Apie mane'},
        {url:'Sachmatulenta.html', title: 'Sachmatu lenta'},
        {url:'mario.html', title: 'Mario'},
        {url:'animacijos.html', title: 'Animacijos'}
        ];

    vm.meniu2 = [
        {name: 'Knygų skaitymas' },
        {name: 'Gelinis nagų lakavimas' },
        {
            name: 'Sportas',
            submenu: [
                { name: 'Bėgimas' },
                { name: 'Vaiksčiojimas' },
            ]
        },
        {name: 'Mėgavimasis kieviena diena' },
        {name: 'Susitikimai su draugais' }];


});