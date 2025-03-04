function parseJson(jsonString: string): any | null {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON");
        return null;
    }
}

console.log(parseJson('{"name": "John"}'));
console.log(parseJson('invalid json'));