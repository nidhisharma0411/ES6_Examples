//default value ka mtlb ye ho gya ki hm koi bhi default value yha pe dete rehte h

//bat ye ho gyi h default parameter ye bta rha h ki chahe kch bhi ho jo default
// value humne de rkhi h vo hmesha mere default perameter m rhegi

let getValue = function(value = 10, bonus = 5){
    console.log(value+bonus);//ye hme error dega undefined ka
};

getValue();
getValue(20);
getValue(20,30);
getValue(undefined,30);
