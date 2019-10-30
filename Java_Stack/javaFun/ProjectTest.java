class Project {
    private String name = "";
    private String description = "";

    public String elevatorPitch () {
        return name + ", " + description;
    }

    public Project () {

    }
    public Project (String name) {
        this.name = name;
    }
    public Project (String name, String description) {
        this.name = name;
        this.description = description;
    }

    public void setName (String name) {
        this.name = name;
    }
    public String getName () {
        return this.name;
    }

    public void setDescription (String description) {
        this.description = description;
    }

    public String getDescription () {
        return this.description;
    }
}

public class ProjectTest {
    public static void main(String[] args) {
        Project project = new Project("Wafi");
        project.setDescription("description");
    }
}