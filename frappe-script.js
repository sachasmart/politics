    var tasks = [{
        id: 'Task 1',
        name: 'Initial Planning and Strategy',
        start: '2021-05-03',
        end: '2021-05-14',
        progress: 0, 
        dependencies: null,
        custom_class: 'director',
        description: 'Planning and Strategy with Future Majority team', 
        resources: 'Director, Support, and Field'
    },{id: 'Task 2',
        name: 'Develop Microsite',
        start: '2021-05-10',
        end: '2021-05-21',
        progress: 0, 
        dependencies: null,
        custom_class: 'director',
        description: 'Work with vendor to create microsite', 
        resources: 'Director, Support'
    },
    {id: 'Task 3',
        name: 'Microsite Launch',
        start: '2021-05-22',
        end: '2021-05-22',
        progress: 0, 
        dependencies: 'Task 2',
        custom_class: 'bar-milestone',
        description: 'Launch microsite', 
        resources: 'Director'
    },{id: 'comms_plan',
        name: 'Create Draft Comms Plan',
        start: '2021-05-12',
        end: '2021-05-17',
        progress: 0, 
        dependencies: null,
        custom_class: 'support',
        description: 'Email approved by Director of Special Projects and Future Majority Staff', 
        resources: 'Support, Director'
    },{
        id: 'approve_comms_plan',
        name: 'Approve Communications Plan',
        start: '2021-05-17',
        end: '2021-05-19',
        progress: 0, 
        dependencies: 'comms_plan',
        custom_class: 'director',
        description: 'Approve draft Communications plan', 
        resources: 'Director'
    },{
    id: 'approve_comms_plan',
        name: 'Communications Plan approved',
        start: '2021-05-20',
        end: '2021-05-20',
        progress: 0,
        dependencies: 'approve_comms_plan',
        custom_class: 'bar-milestone',
        description: 'Approve draft Communications plan',
        resources: 'Director'
    },
    {
        id: 'Task 4',
        name: 'Create Recruitment Email',
        start: '2021-05-17',
        end: '2021-05-19',
        progress: 0, 
        dependencies: 'comms_plan',
        custom_class: 'support',
        description: 'Support staff will draft a recruitment email that will be sent to incumbent candidates and candidates across Canada.', 
        resources: 'Support'
    },{
        id: 'Task 5',
        name: 'Approve Recruitment Email',
        start: '2021-05-20',
        end: '2021-05-21',
        progress: 0, 
        dependencies: 'Task 4',
        custom_class: 'director',
        description: 'Email draft is approved and any adjustments are made.', 
        resources: 'Director'
    },{
        id: 'Task 6',
        name: 'Email Approved',
        start: '2021-05-22',
        end: '2021-05-22',
        progress: 0, 
        dependencies: 'Task 5',
        custom_class: 'bar-milestone',
        description: 'Email approved by Director of Special Projects and all Future Majority Staff', 
        resources: 'Director'
    },{
        id: 'Task 7',
        name: 'Activate regional Future Majority Membership',
        start: '2021-05-17',
        end: '2021-05-21',
        progress: 0, 
        dependencies: null,
        custom_class: 'field',
        description: 'Regional Field Organizers will activate Future Majoirty Membership in their respective regions. They will also begin develop a Recruit List to solicit new Future Majority Members', 
        resources: 'Support'
    },{
        id: 'Task 8',
        name: 'Outreach to 20 Incumbent Candidates',
        start: '2021-05-24',
        end: '2021-05-28',
        progress: 0, 
        dependencies: 'Task 6',
        custom_class: 'director',
        description: 'The 20 incumbent candidates are contacted and brought onboard to participate in the project.', 
        resources: 'Director, Support Staff'
    },{
        id: 'Task 9',
        name: 'Follow-up with 20 incumbent candidates',
        start: '2021-05-29',
        end: '2021-06-02',
        progress: 0, 
        dependencies: 'Task 8',
        custom_class: 'support',
        description: 'Follow-up with 20 incumbent candidates to make sure they will participate.', 
        resources: 'Support Staff'
    },{
    id: 'Task 10',
        name: 'Amplify incumbent videos and microsite',
        start: '2021-05-24',
        end: '2021-06-11',
        progress: 0, 
        dependencies: 'Task 8',
        custom_class: 'support',
        description: 'Amplify incumbent videos and microsite through social media channels', 
        resources: 'Support'
    }, {
        id: 'Task 16',
        name: 'Identify Swing Ridings',
        start: '2021-05-24',
        end: '2021-05-28',
        progress: 0,
        dependencies: null,
        custom_class: 'director',
        description: 'Identify swing electoral districts',
        resources: 'Director, Support, Field'
    }, {
    id: 'Task 11',
        name: 'Identify priorities of young Canadians in respective regions',
        start: '2021-05-24',
        end: '2021-06-11',
        progress: 0, 
        dependencies: 'Task 7',
        custom_class: 'field',
        description: 'Field organizer\'s will identify the priorities of young canadians in their Respective regions.', 
        resources: 'Field Organizers'
    },{
    id: 'Task 12',
        name: 'Outreach to candidates in respective regions.',
        start: '2021-05-31',
        end: '2021-06-11',
        progress: 0, 
        dependencies: 'Task 7, Task 16',
        custom_class: 'field',
        description: 'Field Organizers contact candidates in their respective regions to discuss the project and brought onboard to participate.', 
        resources: 'Field'
    },{
            id: 'Task 13',
            name: 'Seek earned media',
            start: '2021-05-31',
            end: '2021-06-11',
            progress: 0,
            dependencies: null,
            custom_class: 'director',
            description: 'Outreach to previous media contacts.',
            resources: 'Field'
        
    },{
        id: 'Task 14',
        name: 'Generate media attention with Future Majority Membership Wave',
        start: '2021-06-07',
        end: '2021-06-20',
        progress: 0,
        dependencies: 'Task 13',
        custom_class: 'field',
        description: 'Collaborate with regional Future Majority Membership to generate earned regional media.',
        resources: 'Field, Director, Support'
    },{
          id: 'Task 15',
          name: 'Obtain 1,000 1-minute videos on microsite',
          start: '2021-06-21',
          end: '2021-06-21',
          progress: 0,
          dependencies: 'Task 14',
          custom_class: 'bar-milestone',
          description: 'Successfully obtain 1,000 1-minute videos and post on microsite.',
          resources: 'Director, Support, Field'
    },{
        
            id: 'Task 17',
            name: 'Outreach to candidates in swing electoral districts',
            start: '2021-05-31',
            end: '2021-06-04',
            progress: 0,
            dependencies: 'Task 16',
            custom_class: 'director',
            description: 'Connect with candidates in swing electoral districts and determine their interest in participating in a (virtual) debate',
            resources: 'Director, Support, Field'
        
    },{

            id: 'Task 18',
            name: 'Select 5 swing electoral districts',
            start: '2021-06-07',
            end: '2021-06-07',
            progress: 0,
            dependencies: 'Task 17',
            custom_class: 'bar-milestone',
            description: 'Choose 5 electoral districts and confirm their participation a debate',
            resources: 'Director, Support, Field'
 
    },
    {
            id: 'Task 19',
            name: 'Coordinate Debates',
            start: '2021-06-07',
            end: '2021-06-18',
            progress: 0,
            dependencies: 'Task 18',
            custom_class: 'director',
            description: 'Coordinate debates in selected electoral districts',
            resources: 'Director, Support, Field'
    },{

            id: 'Task 20',
            name: 'Host 5 Next Gen Debates',
            start: '2021-06-21',
            end: '2021-06-25',
            progress: 0,
            dependencies: 'Task 19',
            custom_class: 'director',
            description: 'Host 5 Next Gen Debates',
            resources: 'Director, Support, Field'
    }
    

        
]
    var gantt = new Gantt("#gantt", tasks, {
        on_click: function (task) {
        console.log(task);
        },
        on_date_change: function(task, start, end) {
        console.log(task, start, end);
        },
        on_progress_change: function(task, progress) {
        console.log(task, progress);
        },
        on_view_change: function(mode) {
        console.log(mode);
        },
        header_height: 50,
        column_width: 30,
        step: 24,
        view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
        bar_height: 20,
        bar_corner_radius: 3,
        arrow_curve: 5,
        padding: 18,
        view_mode: 'Week',
        date_format: 'YYYY-MM-DD',
        custom_popup_html: function(task) {
        // the task object will contain the updated
        // dates and progress value
        const end_date = moment(task._end).format('MMM D');
        return `
        <div class="details-container" style="padding: 10px;">
            <h5>${task.name}</h5>
            <p><b>Timeline:</b> Expected to finish by ${end_date}</p>
            <p><b>Description:</b> ${task.description}</p>
            <p><b>Resources:</b> ${task.resources}</p>
            <p><b>Progress:</b> ${task.progress}% completed</p>
            
        </div>
        `;
        }
    });