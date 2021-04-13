google.charts.load('current', {
            'packages': ['gantt']
        });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Task ID');
            data.addColumn('string', 'Task Name');
            data.addColumn('string', 'Resource');
            data.addColumn('date', 'Start Date');
            data.addColumn('date', 'End Date');
            data.addColumn('number', 'Duration');
            data.addColumn('number', 'Percent Complete');
            data.addColumn('string', 'Dependencies');

            data.addRows([
                ['initial_planning', 'Initial Planning and Strategy', 'director, support, field',
                    new Date(2021, 4, 03), new Date(2021, 4, 14), null, 0, null
                ],
                ['develop_microsite', 'Develop Microsite', 'director, support',
                new Date(2021, 4, 10), new Date(2021, 4, 21), null, 0, null
                ],
                ['vendor', 'Work with vendor to create microsite', 'director, support',
                new Date(2021, 4, 10), new Date(2021, 4, 20), null, 0, null
                ],
                ['microsite_kickoff', 'Microsite Kickoff', 'director, support',
                new Date(2021, 4, 20), new Date(2021, 4, 21), null, 0, 'vendor'
                ],
                ['email', 'Create Recruitment Email', 'support, director',
                new Date(2021, 4, 17), new Date(2021, 4, 19), null, 0, null
                ],
                ['approve_email', 'Approve Email by Team', 'director, support, field',
                new Date(2021, 4, 20), new Date(2021, 4, 21), null, 0, 'email'
                ],
                ['activate_membership', 'Activate Future Majority Membership', 'field',
                new Date(2021, 4, 17), new Date(2021, 4, 21), null, 0, null
                ],
                ['incumbent_outreach', 'Contact 20 Incumbent Candidates', 'director, support',
                new Date(2021, 4, 24), new Date(2021, 4, 28), null, 0, 'approve_email'
                ],
                ['followup_incumbents', 'Follow-up with Incumbents', 'support',
                new Date(2021, 4, 27), new Date(2021, 5, 02), null, 0, null
                ],



                
                

            ]);

            var options = {
                height: 400,
                gantt: {
                    trackHeight: 30
                }
            };

            var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

            chart.draw(data, options);
        }