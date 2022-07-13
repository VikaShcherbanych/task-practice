const tree = [{
    name: 'root',
    value: 1,
    children: [
        { name : 'child1', value: 2, children: [
            { name : 'grandchild1', value: 3 },
            { name : 'grandchild2', value: 4 }
        ]},
        { name : 'child2', value: 5, children: [
            { name : 'grandchild3', value: 6 },
            { name : 'grandchild4', value: 7, children: [
                { name : 'greatgrandchild1', value: 8 },
                { name : 'greatgrandchild2', value: 9 }
        ]}
        ]}
    ]}];

    function visitTree (tree) {
        tree.map(node => {
        console.log(node.value)
        if (!node.children) {
        return;
        }
        visitTree(node.children)
        })
    };

    visitTree(tree);

    function visitTree1(tree) {
        if(!tree.length){
        return;
        }
        let stack = [];
        tree.forEach(node => stack.push(node));
        while (stack.length) {
        const node = stack.pop();
        console.log(node.value)
        if (node.children) {
        node.children.forEach(child => stack.push(child));
        }
        }
        }

       // visitTree1(tree);
        