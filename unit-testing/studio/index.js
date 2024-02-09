let launchcode = {
    organization: 'nonprofit',
    executiveDirector: 'jeff',
    percentageCoolEmployees: '100',
    programsOffered: ['Web Developement', 'Data Analysis', 'Liftoff'],
    launchOutput: function(n){
        if(n/2===1){
            return 'Launch!';
        } 
        if(n/3===1){
            return 'code!';
        }
        if(n%5===0){
            return 'rocks!';
        }
        if(n%6===0){
            return 'LaunchCode!'
        } 
    }
}; 

function launchOutput(n){

}

module.exports = launchcode;