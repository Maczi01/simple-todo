import { HttpResponse, http } from 'msw';

const todos = [
    { name: 'Shopping', category: 'Personal', priority: 'medium' },
    { name: 'Cleaning', category: 'Household', priority: 'medium' },
    { name: 'Cooking', category: 'Personal', priority: 'high' },
    { name: 'Work', category: 'Work', priority: 'high' },
    { name: 'Exercise', category: 'Health', priority: 'medium' },
    { name: 'Sleep', category: 'Health', priority: 'high' },
    { name: 'Study', category: 'Personal Development', priority: 'medium' },
    { name: 'Reading', category: 'Personal Development', priority: 'low' },
    { name: 'Learn Spanish', category: 'Personal Development', priority: 'low' },
    { name: 'Send card', category: 'Social', priority: 'low' },
];

export const handlers = [
    http.get('/get-all-todos', () => {
        return HttpResponse.json({
            data: todos,
            totalRecords: 32,
        });
    }),
];

// return HttpResponse.json({
//     totalRecords: employeeList.length,
//     data: employeeListGenerate(pageStart, pageEnd, sortCriteria, sortDirection),
// });
