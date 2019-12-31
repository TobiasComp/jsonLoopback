import {DefaultCrudRepository} from '@loopback/repository';
import {Todos, TodosRelations} from '../models';
import {JsonDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TodosRepository extends DefaultCrudRepository<
  Todos,
  typeof Todos.prototype.id,
  TodosRelations
> {
  constructor(
    @inject('datasources.json_db') dataSource: JsonDbDataSource,
  ) {
    super(Todos, dataSource);
  }
}
