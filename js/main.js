$(document).ready(function() {
    //Reading JSON Resume File
    $.getJSON('json-data/resume-data.json', function(data) {                           
        //About Heading
        var headingDiv = $("#heading-section");
            //Heading Name and Title          
            $("<h1>").text(data.heading.name).appendTo(headingDiv);
            $("<h2>").text(data.heading.title).appendTo(headingDiv);                                
        
            //About Me
            $("<h3>").text("About Me").appendTo(headingDiv);
            $("<div>").text(data.heading.about).appendTo(headingDiv);
        
        //Languages
        var languagesDiv = $("#languages-section");
            //Heading
            $("<h3>").text("Language Proficiency").appendTo(languagesDiv);

            //List
            var languageList = $("<ul>").appendTo(languagesDiv);
            //Loop
            $(data.languages).each(function(index, value) {
                languageList.append($("<li>").append(value.language)
                                             .append(" ("+value.level+")"))
            });
        
        //Contact
        var contactDiv = $("#contact-section");
            //Heading
            $("<h3>").text("Let's Get in Touch").appendTo(contactDiv);
            //Loop through Contacts
            $(data.contact).each(function(index, value) {                    
                var aContact = $("<div>"+value.method+": </div>")
                                    .append("<span>"+value.description+"</span>");
                contactDiv.append(aContact);
            });

        //Hobbies
        var hobbiesDiv = $('#hobbies-section');
            //Heading
            $("<h3>").text("Hobbies").appendTo(hobbiesDiv);

            //UL List Variable
            var hobbiesList = $("<ul>").appendTo(hobbiesDiv);

            //Loop through hobbies
            $(data.hobbies).each(function(index, value) {
                hobbiesList.append($("<li>").append(value));
            });
        
        //Education
        var educationDiv = $('#education-section');
            //Heading
            $("<h3>").text("Education").appendTo(educationDiv);
            
            //Education List
            $(data.education).each(function(index, value) {
                var institute = $("<div class='institute'>").text(value.institute);
                var program = $("<div class='program'>").append(value.program).append("<span> "+value.score+"</span>");
                var duration = $("<div class='duration'>").text(value.start + " - " + value.end);
                educationDiv.append(institute, program, duration);
            });
        
        //Skills
        var skillsDiv = $('#skills-section');
            //Heading
            $("<h3>").text("Skills").appendTo(skillsDiv);

            //UL List Variable
            var skillsList = $("<ul>").appendTo(skillsDiv);

            //Loop through Skills
            $(data.skills).each(function(index, value) {
                var listItem = $("<li>").append(value.description).appendTo(skillsList);
                
                //If subskills exist, showing them
                if(value.subskills) {
                    var subList = $("<ul>").appendTo(listItem);
                    $(value.subskills).each(function(subIndex, subValue) {
                        subList.append($("<li>").append(subValue));
                    });
                }
            });

        //Work History
        var workHistoryDiv = $('#work-history-section');
            //Heading
            $("<h3>").text("Work History").appendTo(workHistoryDiv);
            
            //Loop through Work History
            $(data.workhistory).each(function(index, value) {
                var aWork = workHistoryDiv.append($("<div class='company-format-text'>").append(value.company));
                
                //If positions exist, showing them
                if(value.positions) {
                    var posList = $("<ul>").appendTo(aWork);
                    $(value.positions).each(function(posIndex, posValue) {
                        var anItem = $("<li>").append(posValue.title).appendTo(posList);

                        if(posValue.from && posValue.to) {
                            anItem.append(" (" + posValue.from + " - " + posValue.to + ")");
                        }
                    });
                }
            });

        //Volunteer Work
        var volunteerWorkDiv = $('#volunteer-work-section');
            //Heading
            $("<h3>").text("Volunteer Work").appendTo(volunteerWorkDiv);
            
           //Loop through Volunteer Work
           $(data.volunteerwork).each(function(index, value) {
                var aVolunteer = volunteerWorkDiv.append($("<div class='organization-format-text'>").append(value.organization));
                
                //If positions exist, showing them
                if(value.positions) {
                    var posList = $("<ul>").appendTo(aVolunteer);
                    $(value.positions).each(function(posIndex, posValue) {
                        var anItem = $("<li>").append(posValue.title).appendTo(posList);

                        if(posValue.from && posValue.to) {
                            anItem.append(" (" + posValue.from + " - " + posValue.to + ")");
                        }
                    });
                }
            });
        
        //Awards
        var awardsDiv = $('#awards-section');
            //Heading
            $("<h3>").text("Coding Awards and Certificates").appendTo(awardsDiv);
            
            var awardsList = $('<ul id="awards-list">').appendTo(awardsDiv);

            //Loop through Awards
            $(data.awards).each(function(index, value) {
                 var anAward = awardsList.append($("<li>").append(value.organization)
                                                .append(value.name ? " " + value.name : "" )
                                                .append(value.achievement ? " - " + value.achievement : ""));
                 
                 
             });

             //Adding Padding Left Increment for each li element
             $('li', $('#awards-list')).each(function(index, element) {
                  $(element).css("margin-left", index*2 + "vw");                
             });

        //Corner-Section (Setting Location Name)
        $('#location-name').append('<i class="fa fa-map-marker"></i> ').append(data.location);                

        //Print Button
        $('#print-option').click(function(){
            window.print();
       });
    });
});