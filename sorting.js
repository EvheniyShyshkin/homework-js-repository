var arr = [
    {name: 'Michael', mark: 5},
    {name: 'Helga', mark: 4.5},
    {name: 'Dmytro', mark: 4},
    {name: 'Denis', mark: 4},
    {name: 'Helen', mark: 4.5},
    {name: 'Mike', mark: 5},
    {name: 'Max', mark: 5},
    {name: 'Morty', mark: 3}
];

arr.sort(function(a, b){
    return b.mark - a.mark;
});
console.log(arr);
