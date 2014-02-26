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
    $scope.listViewActive = true;
	$scope.init = function() {
		$http({method: 'GET', url: '/projects'}).
			success(function(data) {
				$scope.projects = data.projects;
				$scope.gridOptions = { data: 'projects' };
			}).
			error(function(data, status, headers, config) {
				alert("Could not receive project names");
			});
	};

	$scope.init();

    $scope.save = function() {
       	 $http({
			method: 'POST',
			url: '/projects/addProject',
			headers: {'Content-Type': 'application/json'},
			data: $scope.pr}
		).success(function(data) {
				 $scope.init();
				 $scope.resetDataEntryForm();
				 $scope.listViewActive = true;
			 });
    };

	$scope.new = function() {
		$scope.listViewActive = false;
	};

	$scope.resetDataEntryForm = function() {
		$('#dataEntryForm')[0].reset();
		$scope.pr = {};
		$scope.dataEntryForm.$setPristine();
		$scope.dataEntryForm.name.$error.required = true;
		$scope.dataEntryForm.site.$error.required = true;
		/*$scope.dataEntryForm.site.$error.url = false;*/

	};

	$scope.cancelDataEntryForm = function() {
		$scope.resetDataEntryForm();
		$scope.listViewActive = true;
	}
}
DataEntryController.$inject = ['$scope', '$http', '$location'];
