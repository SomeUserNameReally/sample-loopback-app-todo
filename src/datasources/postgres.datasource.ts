import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {
  POSTGRESQL_DATABASE_NAME,
  POSTGRESQL_HOST,
  POSTGRESQL_PORT,
  POSTGRESQL_USER_ID,
  POSTGRESQL_USER_PASSWORD,
} from '../config';

const config = {
  name: 'postgres',
  connector: 'postgresql',
  url: '',
  host: POSTGRESQL_HOST,
  port: POSTGRESQL_PORT,
  user: POSTGRESQL_USER_ID,
  password: POSTGRESQL_USER_PASSWORD,
  database: POSTGRESQL_DATABASE_NAME,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PostgresDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'postgres';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.postgres', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
