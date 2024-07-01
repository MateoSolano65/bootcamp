import Admin from './admin.js';
import Member from './member.js';

class UserFactory {
  static createUser( type, id, name, email, extra ) {
    switch ( type ) {
      case 'admin':
        return new Admin( id, name, email, extra );
      case 'member':
        return new Member( id, name, email, extra );
      default:
        throw new Error( 'Tipo de usuario no soportado' );
    }
  }
}

export default UserFactory;
