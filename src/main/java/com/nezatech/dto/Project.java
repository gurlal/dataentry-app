package com.nezatech.dto;

/**
 * Created with IntelliJ IDEA.
 * User: gurlal
 * Date: 23/02/14
 * Time: 9:02 PM
 * To change this template use File | Settings | File Templates.
 */

public class Project {
	private Integer id;
    private String name;
    private String site;
    private String description;

	public Project() {

	}

	public Project( Integer id, String name, String site, String description) {
		this.name = name;
		this.site = site;
		this.description = description;
		this.id = id;
	}

	public Project(String name, String site, String description) {
		this.name = name;
		this.site = site;
		this.description = description;
	}

	public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;

		Project project = (Project) o;

		if (description != null ? !description.equals(project.description) : project.description != null) return false;
		if (id != null ? !id.equals(project.id) : project.id != null) return false;
		if (name != null ? !name.equals(project.name) : project.name != null) return false;
		if (site != null ? !site.equals(project.site) : project.site != null) return false;

		return true;
	}

	@Override
	public int hashCode() {
		int result = name != null ? name.hashCode() : 0;
		result = 31 * result + (site != null ? site.hashCode() : 0);
		result = 31 * result + (description != null ? description.hashCode() : 0);
		result = 31 * result + (id != null ? id.hashCode() : 0);
		return result;
	}

	@Override
	public String toString() {
		return "Project{" +
				"name='" + name + '\'' +
				", site='" + site + '\'' +
				", description='" + description + '\'' +
				", id=" + id +
				'}';
	}
}
