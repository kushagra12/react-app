import React from 'react';

class CoursesPage extends React.Component{

    constructor(prop, context){
        super(prop, context);

        this.state = {
            course : {title : ""}
        };

        // Manually binding due to ES6 changes
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onCourseSubmit = this.onCourseSubmit.bind(this);
    }

    onTitleChange(event){

    }

    onCourseSubmit(){

    }

    render(){
        return(
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>

                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                <input type="submit" value={this.onCourseSubmit} onClick={this.onClickSave}/>
            </div>
        );
    }
}

export default CoursesPage;