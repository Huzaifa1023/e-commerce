class Helper{
    setToLocalStorage(key: string, value: any) {
        const stringValue = JSON.stringify(value)
        localStorage.setItem(key,stringValue)
    }
    getLocalStorage(key: string): string | null {
        if (typeof window !== 'undefined') {
            const string = localStorage.getItem(key);
            return string
        }
        return null
    }
    getNameLetters(fullName: string): string {
        const splitted = fullName.split(" ");
        const firstName = splitted[0][0]?.toUpperCase()
        const lastName = splitted[1][0]?.toUpperCase()
        if (firstName && lastName) {
            return firstName+lastName
        } else {
            return firstName
        }
    }
}

export default new Helper()