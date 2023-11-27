
export default function healthIndicator(obj) {
    let result = '';    
    if (obj.health > 50){
        result = 'healthy';
    }
    else if (obj.health < 50 && 15 < obj.health) {
        result = 'wounded';
        }
    else {
        result = 'critical';
           }
    return result
    }

