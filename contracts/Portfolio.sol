// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Portfolio{
    address public owner;

    constructor(){
        owner=msg.sender;
    }
    modifier onlyOwner(){
        require(msg.sender==owner,"You are not the owner");
        _;
    }

    struct Education{
        uint id;
        string date;
        string degree;
        string institutionName;

    }

    Education[3] public education;

    function insertEducation(uint _id,string calldata _date,string calldata _degree,string calldata _institutionName)public{
        require(msg.sender==owner,"You cannot add education to site");
        require(_id<3,"You cannot add more than 3 education");
        education[_id]=Education(_id,_date,_degree,_institutionName);

    }

    function editEducation(uint _id,string calldata _date,string calldata _degree,string calldata _institutionName)public{
        require(msg.sender==owner,"You cannot edit education info");
        require(_id<3 && _id>=0,"Invalid Id");
        education[_id]=Education(_id,_date,_degree,_institutionName);

    }

    function allEducations() view public returns(Education[3] memory){
        return education;
    }

    struct Project{
        uint id;
        string name;
        string description;
        string image;
        string githubLink;      // here we store repo name in githunLink
                                // as we use concatenation in our react code
    }

    Project[3] public projects;
    uint projectCount=0;

       function insertProject(string calldata _name, string calldata _description, string calldata _image,string calldata _githubLink) public{
        require(msg.sender==owner,"You cannot add project to site");
        require(projectCount<3,"You cannot add more than 3 projects");
        projects[projectCount]=Project(projectCount,_name,_description,_image,_githubLink);
        projectCount++;
    }

    function changeProject(uint _id,string calldata _name, string calldata _description, string calldata _image,string calldata _githubLink) public{
        require(msg.sender==owner,"You are not owner");
        require(_id>=0 && _id<3);
        require(projectCount>=0 ,"No projects available");

        projects[_id].name=_name;
        projects[_id].description=_description;
        projects[_id].image=_image;
        projects[_id].githubLink=_githubLink;

    }

    function allProjects()public view returns(Project[3] memory){
        return projects;
    }

    struct Experience{ 
        uint id;
        string companyName;
        string designation;
        string timeWorked;

    }
    uint experienceCount=0;
    Experience[4] public experiences;

    function insertExperience(string calldata _companyName,string calldata _designation,string calldata _timeWorked)public{
        require(msg.sender==owner,"You are not owner");
        require(experienceCount<4,"Not more than 4 experiences");
        experiences[experienceCount]=Experience(experienceCount,_companyName,_designation,_timeWorked);
        experienceCount++;
    }
    function editExperience(uint _id,string calldata _companyName,string calldata _designation,string calldata _timeWorked)public{
        require(msg.sender==owner,"You are not owner");
        require(_id<4 && _id>=0,"Invalid Id");
        experiences[experienceCount]=Experience(_id,_companyName,_designation,_timeWorked);
    }
    function allExperiences()view public returns(Experience[4] memory){
        return experiences;
    }
    

    string public profileImage = "QmehYf8ESipfSRcm2y1QGaBnD59z7v6sCkKGoS1LAid8AY";
    string public description = "Full-stack blockchain developer and Web3 enthusiast";
    string public resumeLink = "QmWBeNrPf7StffZBf9rbwNm9fXLxC4qxfjwrvEy8ZipZQp";

    
    function changeDescription(string calldata _x) public  onlyOwner{
        description=_x;
    }
    function changeProfileImage(string calldata _x) public onlyOwner{      // two methods to check owner either use require fucntion or modifier
        profileImage=_x;
    }
    function changeResume(string calldata _x) public onlyOwner{
        resumeLink=_x;
    }
    


}