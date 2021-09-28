import {belongsTo, Entity, model, property} from '@loopback/repository';
import {UserWithRelations} from '.';
import {User} from './user.model';

@model()
export class Todo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  completed?: boolean;

  @property({
    type: 'date',
    required: true,
  })
  createdAt: Date;

  @property({
    type: 'date',
    required: true,
  })
  updatedAt: Date;

  @belongsTo(() => User)
  userId: string;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
  user?: UserWithRelations;
}

export type TodoWithRelations = Todo & TodoRelations;
