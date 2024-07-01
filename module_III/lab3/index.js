import UserFactory from './userFactory.js';
import Document from './document.js';

const admin1 = UserFactory.createUser( 'admin', 1, 'Pepito', 'pepito@perez.com', 'all' );
const member1 = UserFactory.createUser( 'member', 2, 'Pepita', 'pepita@segunda.com', '2023-01-01' );
const doc1 = new Document( 'report', 'Reporte Anual' );

console.log( admin1.showInfo() );
console.log( admin1.manageUsers() );

console.log( member1.showInfo() );
console.log( member1.viewContent() );

console.log( doc1.showDocument() );
