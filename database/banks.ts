import { mysqlTable, varchar, text } from 'drizzle-orm/mysql-core';

export const banks = mysqlTable('Banks', {
	bank: varchar('Bank', { length: 256 }).primaryKey(),
	description: text('Description').notNull(),
});
