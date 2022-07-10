function Result() {
    this.result = function (marks) {
        let gpa;
        let gread;
          
        if (marks >= 0 && marks <= 33) {
            gpa = 0;
            gread = 'F';
        }
        else if (marks >= 34 && marks <= 50) {
            gpa = 1;
            gread = 'D';
        }
        else if (marks >= 51 && marks <= 60) {
            gpa = 2;
            gread = 'C';
        }
        else if (marks >= 61 && marks <= 70) {
            gpa = 3;
            gread = 'B';
        }
        else if (marks >= 71 && marks <= 80) {
            gpa = 3.5;
            gread = 'A-';
        }
        else if (marks >= 81 && marks <= 90) {
            gpa = 4;
            gread = 'A';
        }
        else if (marks >= 91 && marks <= 100) {
            gpa = 5;
            gread = 'A+';
        } else {
            gpa = 'invalid';
            gread = 'invalid';
        }

        return {
            gpacal: gpa,
            greadcal: gread
        };
    }  
    this.finalCgpa = function (ban, eng, math) {
        let totalgpa =
            this.result(ban).gpacal + this.result(eng).gpacal + this.result(math).gpacal;
        let finalcgpa = totalgpa / 3;

        
        if (ban < 33 || eng < 33 || math < 33) {
            finalcgpa = 0;
            finalgread = "F";
        
        } else if (finalcgpa >= 1 && finalcgpa < 2) {
            
            finalgread = "D";
        } else if (finalcgpa >= 2 && finalcgpa < 3) {
           
            finalgread = "C";
        } else if (finalcgpa >= 3 && finalcgpa < 3.5) {
           
            finalgread = "B";
        } else if (finalcgpa >= 3.5 && finalcgpa < 4) {
            
            finalgread = "A-";
        } else if (finalcgpa >= 4 && finalcgpa < 5) {
            
            finalgread = "A";
        } else if (finalcgpa == 5) {
            
            finalgread = "A+";
        }
        return {
            rescgpa: finalcgpa == 0 ? '':finalcgpa.toFixed(2),
            resgread: finalgread
        }
    }
}

