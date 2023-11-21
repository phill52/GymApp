import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
    version:1,
    tables:[
        tableSchema({
            name:'routinedexercise',
            columns:[
                {name:'exerciseid', type:'string', isIndexed:true},
                {name:'exercisename', type:'string'},
                {name:'sets', type:'number'},
                {name:'reps', type:'number'},
                {name:'muscletrained', type:'string'},
            ]
        }),
        tableSchema({
            name:'routineday',
            columns:[
                {name:'routinedayid', type:'string', isIndexed:true },
                {name:'routineday', type:'string'},
            ]
        }),
        tableSchema({
            name:'routine',
            columns:[
                {name:'routineid', type:'string', isIndexed:true},
                {name:'routinename', type:'string'},
                {name:'days', type:'array'}
            ]
        }),
        tableSchema({
            name:'preformedset',
            columns:[
                {name:'preformedsetid', type:'string', isIndexed:true},
                {name:'routinedayid', type:'string'},
                {name:'exerciseid', type:'string'},
                {name:'weight', type:'number'},
                {name:'reps', type:'number'},
                {name:'date', type:'number'},
            ]
        })
        
    ]
})