/*
 * $Id$
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function AppController($scope) { }
AppController.$inject = ['$scope'];

function DataEntryController($scope, $http, $location) {
    $scope.name = "Sunshine";

    $scope.save = function() {
       /* $.getJSON('/projects/addProject', $("#dataEntryForm").serialize(), function(data){
            $location.path('/projects');
        });*/
        $http({method: 'POST', url: '/projects/addProject', params: $scope.pr}).success(
            function(data){
                $location.path('/projects');
            }
        );
    }
}
DataEntryController.$inject = ['$scope', '$http', '$location'];

function ApacheProjectsController($scope, $http) {
    this.init = function() {
        $http({method: 'GET', url: '/projects'}).
          success(function(data) {
            $scope.projects = data.projectNames;
          }).
          error(function(data, status, headers, config) {
            alert("Could not receive project names");
          });
    };

    this.init();
}
ApacheProjectsController.$inject = ['$scope', '$http'];