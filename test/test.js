import healthIndicator from '../src/game.js';


describe('Test game', () => {
    const testCases = [
        {
            incomingObject: {name: 'мечник', health: 10},
            expencted: 'critical'
        },
        {
            incomingObject: {name: 'маг', health: 100},
            expencted: 'healthy'
        },
        {
            incomingObject: {name: 'лучник', health: 49},
            expencted: 'wounded'
        },
        
    ];
    testCases.forEach(test => {
        it('проверка здоровья', () => {     
            const result = healthIndicator(test.incomingObject);
            expect(result).toBe(test.expencted)
        })
    })
})