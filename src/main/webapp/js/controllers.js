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
	$scope.editMode = false;
	$scope.pr = {};
	$scope.pr.project = {};
	$scope.projects = {};

/*	$scope.init = function() {
		$http({method: 'GET', url: '/projects'}).
			success(function(data) {
				$scope.projects = data.projects;
			}).
			error(function(data, status, headers, config) {
				alert("Could not receive project names");
			});
	};
	$scope.init();*/

	$scope.totalServerItems = 0;
	$scope.pagingOptions = {
		pageSizes: [5, 10, 20],
		pageSize: 5,
		currentPage: 1
	};

	$scope.getPagedDataAsync = function () {
		setTimeout(function () {
			$http({
					method: 'POST',
					url: '/projects/getPage',
					headers: {'Content-Type': 'application/json'},
					data: $scope.pagingOptions}
			).success(function(data) {
					$scope.projects = data.projects;
					$scope.totalServerItems = data.totalServerItems;
				});
		}, 100);
	};

	$scope.getPagedDataAsync();

	$scope.$watch('pagingOptions', function (newVal, oldVal) {
		if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
			$scope.getPagedDataAsync();
		}
	}, true);

	$scope.gridOptions = { data: 'projects',
		multiSelect: false,
		afterSelectionChange : function(rowItem, event){
			$scope.pr.project = rowItem.entity;
		},
		columnDefs: [{field: 'name', displayName: 'Name', enableCellEdit: false},
			{field:'site', displayName:'Website', enableCellEdit: false}],
		enablePaging: true,
		showFooter: true,
		totalServerItems:'totalServerItems',
		pagingOptions: $scope.pagingOptions,
		jqueryUITheme: true
	};




    $scope.save = function() {
		if(!$scope.editMode) {
			 $http({
				method: 'POST',
				url: '/projects/addProject',
				headers: {'Content-Type': 'application/json'},
				data: $scope.pr}
			).success(function(data) {
					 $scope.projects.push(data.project);
					 $scope.resetDataEntryForm();
					 $scope.listViewActive = true;
				 });
		} else {
			$http({
					method: 'POST',
					url: '/projects/editProject',
					headers: {'Content-Type': 'application/json'},
					data: $scope.pr
				}
			).success(function(data) {
					$scope.resetDataEntryForm();
					$scope.listViewActive = true;
				});
		}
    };

	$scope.new = function() {
		$scope.resetDataEntryForm();
		$scope.listViewActive = false;
		$scope.editMode = false;
	};

	$scope.edit = function() {
		$scope.dataEntryForm.$invalid = false;
		$scope.editMode = true;
		$scope.listViewActive = false;
	};

	$scope.resetDataEntryForm = function() {
		$('#dataEntryForm')[0].reset();
		$scope.pr.project = {};
		$scope.dataEntryForm.$setPristine();
		$scope.dataEntryForm.name.$error.required = true;
		$scope.dataEntryForm.site.$error.required = true;
		$scope.dataEntryForm.$invalid = true;
		$scope.editMode = false;
		/*$scope.dataEntryForm.site.$error.url = false;*/

	};

	$scope.cancelDataEntryForm = function() {
		$scope.resetDataEntryForm();
		$scope.listViewActive = true;
	}
}
DataEntryController.$inject = ['$scope', '$http', '$location'];
