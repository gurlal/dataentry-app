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
package com.nezatech.actions;

import com.nezatech.dto.Project;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.convention.annotation.Result;

import java.util.ArrayList;
import java.util.List;

/**
 * <code>List Apache projects.</code>
 */
@Result(type = "json")
public class ProjectsAction extends ActionSupport {

    private static final long serialVersionUID = 9037336532369476225L;

    public static List<Project> projectNamesdyn = new ArrayList<Project>();

    private List<Project> projects = new ArrayList<Project>();

    public String execute() throws Exception {

        projects.add(new Project("Apache Struts", "http://myTest", "My Test"));
        projects.add(new Project("Apache Log4j", "http://myTest", "My Test"));
        projects.add(new Project("Apache Tomcat", "http://myTest", "My Test"));
        projects.add(new Project("Apache Maven", "http://myTest", "My Test"));
        projects.add(new Project("Apache Ant", "http://myTest", "My Test"));
        projects.add(new Project("Apache Log4Net", "http://myTest", "My Test"));
        projects.add(new Project("Apache Log4Cxx", "http://myTest", "My Test"));
        projects.add(new Project("Apache Chainsaw", "http://myTest", "My Test"));
        projects.add(new Project("Apache Incubator", "http://myTest", "My Test"));
        projects.add(new Project("Apache Hadoop", "http://myTest", "My Test"));
        projects.add(new Project("Apache OpenOffice", "http://myTest", "My Test"));
        projects.add(new Project("Apache Mahout", "http://myTest", "My Test"));
        projects.add(new Project("Apache Tapestry", "http://myTest", "My Test"));
        projects.add(new Project("Apache Jena", "http://myTest", "My Test"));
        projects.add(new Project("Apache Solr", "http://myTest", "My Test"));
        projects.add(new Project("Apache Cayenne", "http://myTest", "My Test"));
        projects.add(new Project("Apache OpenEJB", "http://myTest", "My Test"));
        projects.add(new Project("Apache Deltaspike", "http://myTest", "My Test"));
        projects.add(new Project("Apache Cordova", "http://myTest", "My Test"));
        projects.addAll(projectNamesdyn);

        return SUCCESS;
    }

    public List<Project> getProjects() {
        return projects;
    }
}
