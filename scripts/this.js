var employee ={
    id: 1,
    greet: function(){
        var self = this;
        setTimeout(function(){console.log(self.id)}, 1000);
    }
};
employee.greet()

// this keyword ka bhi whi concept a gya agr koi outer function h to uska refernece nhi le payega