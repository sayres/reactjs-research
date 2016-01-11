
/**
 * Classroom participant
 * 
 * @param {String} name participant name
 * @param {String} accessCode
 * @returns {Participant}
 */
function Participant(name, accessCode) {
    if (!(this instanceof Participant)) {
        throw new TypeError("Participant constructor cannot be called as a function.");
    }
    
    this.name       = name;
    this.accessCode = accessCode;
    this.level = 0;
    
    this.modelChangedDelegate = function() {
    };
    
    this.setLevel = function(level) {
        this.level = level;
        if (this.modelChangedDelegate) {
            this.modelChangedDelegate(this);
        }
    };
};


