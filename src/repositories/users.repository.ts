import {DefaultCrudRepository} from '@loopback/repository';
import {Users, UsersRelations} from '../models';
import {JsonDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UsersRelations
> {
  constructor(
    @inject('datasources.json_db') dataSource: JsonDbDataSource,
  ) {
    super(Users, dataSource);
  }
}
