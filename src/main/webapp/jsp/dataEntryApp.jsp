<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html lang="en" ng-app="angularstruts">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Generic Data Entry Application</title>


    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Add custom CSS here -->
    <link href="css/shop-item.css" rel="stylesheet">

</head>

<body>

<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
<div class="container">
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav">
            <li>
                <h3><s:property value="message"/></h3>
            </li>
            <li>
                <a href="#/dataEntry">Home</a>
            </li>
            <li>
                <a href="#/projects">Projects</a>
            </li>
            <%--
            <li><a href="#about">About</a>
            </li>
            <li><a href="#services">Services</a>
            </li>
            <li><a href="#contact">Contact</a>
            </li>--%>
        </ul>
    </div>
    <!-- /.navbar-collapse -->
</div>
<!-- /.container -->
</nav>
<div class="container">

    <div class="row">
        <div class="col-md-3">
            <p class="lead"></p>

        </div>

        <div class="col-md-9">
            <div ng-controller="DataEntryController">
                <div ng-view></div>
            </div>
        </div>

    </div>

</div>
<!-- /.container -->

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

<script src="js/jquery-1.10.2.js"></script>
<script src="<s:url value="js/lib/angular/angular.min.js" />"></script>
<script src="<s:url value="js/lib/angular/angular-bootstrap.min.js" />"></script>
<script src="<s:url value="js/lib/angular/angular-bootstrap-prettify.min.js" />"></script>
<script src="<s:url value="js/directives.js" />"></script>
<script src="<s:url value="js/controllers.js" />"></script>
<script src="<s:url value="js/startup.js" />"></script>
<script src="<s:url value="js/bootstrap.min.js" />"></script>

</body>
</html>
