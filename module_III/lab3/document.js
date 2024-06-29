class Document {
    constructor(type, content) {
        this.type = type;
        this.content = content;
    }

    showDocument() {
        return `Tipo: ${this.type}, Contiene: ${this.content}`;
    }
}

export default Document;