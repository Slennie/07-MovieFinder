(function() {
    'use strict';

    angular
        .module('movie-finder')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['movieFactory', 'toastr'];

    /* @ngInject */
    function SearchController(movieFactory, toastr) {
        var vm = this;

        vm.findMovies = findMovies;

        //////////////////////

        function findMovies(input) {
            movieFactory
                .searchForMovie(input)
                .then(function(response) {
                	vm.results = response.data.Search;

                })
                .catch(function(error) {
                	toastr.error('Oops! Something went wrong. Please try again.');
                });
        }
    }
})();
