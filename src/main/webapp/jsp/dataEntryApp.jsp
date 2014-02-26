<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html lang="en" ng-app="angularstruts">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><s:property value="message"/></title>


    <link href="../css/bootstrap.min.css" rel="stylesheet">

    <!-- Add custom CSS here -->
    <link href="../css/style.css" rel="stylesheet">
    <link href="../css/ng-grid.min.css" rel="stylesheet">
</head>

<body>
<div class="container">
    <div class="row">
        <%--<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">--%>
        <div class="container">
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="#/dataEntry">Home</a>
                    </li>
                    <li>
                        <a href="#/projects">Projects</a>
                    </li>
                </ul>

            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
       <%-- </nav>--%>
    </div>
    <div class="row">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div ng-controller="DataEntryController">
                        <div ng-view></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- /.container -->
    <div class="row">
        <div class="container">

            <hr>

            <footer>
                <div class="row">
                    <div class="col-lg-12">
                        <p>Copyright &copy; NezaTech
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    </div>
</div>
<script src="../js/jquery-1.10.2.js"></script>
<script src="../js/lib/angular/angular.js"></script>
<script src="js/lib/angular/angular-route.js"></script>
<script src="js/lib/ng-grid/ng-grid-2.0.7.min.js"></script>
<script src="../js/directives.js"> </script>
<script src="../js/controllers.js"></script>
<script src="../js/startup.js"></script>
<script src="../js/bootstrap.min.js"></script>
</body>
</html>
