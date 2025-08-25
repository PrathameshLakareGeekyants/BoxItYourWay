
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Combo
 * 
 */
export type Combo = $Result.DefaultSelection<Prisma.$ComboPayload>
/**
 * Model ComboItem
 * 
 */
export type ComboItem = $Result.DefaultSelection<Prisma.$ComboItemPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model DeliveryInfo
 * 
 */
export type DeliveryInfo = $Result.DefaultSelection<Prisma.$DeliveryInfoPayload>
/**
 * Model OrderTag
 * 
 */
export type OrderTag = $Result.DefaultSelection<Prisma.$OrderTagPayload>
/**
 * Model Wrap
 * 
 */
export type Wrap = $Result.DefaultSelection<Prisma.$WrapPayload>
/**
 * Model PreferencePrice
 * 
 */
export type PreferencePrice = $Result.DefaultSelection<Prisma.$PreferencePricePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const OrderStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const Preference: {
  BAG: 'BAG',
  BOX: 'BOX'
};

export type Preference = (typeof Preference)[keyof typeof Preference]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type Preference = $Enums.Preference

export const Preference: typeof $Enums.Preference

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.combo`: Exposes CRUD operations for the **Combo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Combos
    * const combos = await prisma.combo.findMany()
    * ```
    */
  get combo(): Prisma.ComboDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comboItem`: Exposes CRUD operations for the **ComboItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComboItems
    * const comboItems = await prisma.comboItem.findMany()
    * ```
    */
  get comboItem(): Prisma.ComboItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveryInfo`: Exposes CRUD operations for the **DeliveryInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryInfos
    * const deliveryInfos = await prisma.deliveryInfo.findMany()
    * ```
    */
  get deliveryInfo(): Prisma.DeliveryInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderTag`: Exposes CRUD operations for the **OrderTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderTags
    * const orderTags = await prisma.orderTag.findMany()
    * ```
    */
  get orderTag(): Prisma.OrderTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wrap`: Exposes CRUD operations for the **Wrap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wraps
    * const wraps = await prisma.wrap.findMany()
    * ```
    */
  get wrap(): Prisma.WrapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preferencePrice`: Exposes CRUD operations for the **PreferencePrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PreferencePrices
    * const preferencePrices = await prisma.preferencePrice.findMany()
    * ```
    */
  get preferencePrice(): Prisma.PreferencePriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Product: 'Product',
    Category: 'Category',
    Combo: 'Combo',
    ComboItem: 'ComboItem',
    Cart: 'Cart',
    CartItem: 'CartItem',
    DeliveryInfo: 'DeliveryInfo',
    OrderTag: 'OrderTag',
    Wrap: 'Wrap',
    PreferencePrice: 'PreferencePrice',
    Order: 'Order',
    OrderItem: 'OrderItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "product" | "category" | "combo" | "comboItem" | "cart" | "cartItem" | "deliveryInfo" | "orderTag" | "wrap" | "preferencePrice" | "order" | "orderItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Combo: {
        payload: Prisma.$ComboPayload<ExtArgs>
        fields: Prisma.ComboFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComboFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComboFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          findFirst: {
            args: Prisma.ComboFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComboFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          findMany: {
            args: Prisma.ComboFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>[]
          }
          create: {
            args: Prisma.ComboCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          createMany: {
            args: Prisma.ComboCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComboCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>[]
          }
          delete: {
            args: Prisma.ComboDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          update: {
            args: Prisma.ComboUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          deleteMany: {
            args: Prisma.ComboDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComboUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComboUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>[]
          }
          upsert: {
            args: Prisma.ComboUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          aggregate: {
            args: Prisma.ComboAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCombo>
          }
          groupBy: {
            args: Prisma.ComboGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComboGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComboCountArgs<ExtArgs>
            result: $Utils.Optional<ComboCountAggregateOutputType> | number
          }
        }
      }
      ComboItem: {
        payload: Prisma.$ComboItemPayload<ExtArgs>
        fields: Prisma.ComboItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComboItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComboItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboItemPayload>
          }
          findFirst: {
            args: Prisma.ComboItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComboItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboItemPayload>
          }
          findMany: {
            args: Prisma.ComboItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboItemPayload>[]
          }
          create: {
            args: Prisma.ComboItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboItemPayload>
          }
          createMany: {
            args: Prisma.ComboItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComboItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboItemPayload>[]
          }
          delete: {
            args: Prisma.ComboItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboItemPayload>
          }
          update: {
            args: Prisma.ComboItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboItemPayload>
          }
          deleteMany: {
            args: Prisma.ComboItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComboItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComboItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboItemPayload>[]
          }
          upsert: {
            args: Prisma.ComboItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboItemPayload>
          }
          aggregate: {
            args: Prisma.ComboItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComboItem>
          }
          groupBy: {
            args: Prisma.ComboItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComboItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComboItemCountArgs<ExtArgs>
            result: $Utils.Optional<ComboItemCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      DeliveryInfo: {
        payload: Prisma.$DeliveryInfoPayload<ExtArgs>
        fields: Prisma.DeliveryInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInfoPayload>
          }
          findFirst: {
            args: Prisma.DeliveryInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInfoPayload>
          }
          findMany: {
            args: Prisma.DeliveryInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInfoPayload>[]
          }
          create: {
            args: Prisma.DeliveryInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInfoPayload>
          }
          createMany: {
            args: Prisma.DeliveryInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInfoPayload>[]
          }
          delete: {
            args: Prisma.DeliveryInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInfoPayload>
          }
          update: {
            args: Prisma.DeliveryInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInfoPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInfoPayload>[]
          }
          upsert: {
            args: Prisma.DeliveryInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryInfoPayload>
          }
          aggregate: {
            args: Prisma.DeliveryInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryInfo>
          }
          groupBy: {
            args: Prisma.DeliveryInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryInfoCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryInfoCountAggregateOutputType> | number
          }
        }
      }
      OrderTag: {
        payload: Prisma.$OrderTagPayload<ExtArgs>
        fields: Prisma.OrderTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTagPayload>
          }
          findFirst: {
            args: Prisma.OrderTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTagPayload>
          }
          findMany: {
            args: Prisma.OrderTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTagPayload>[]
          }
          create: {
            args: Prisma.OrderTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTagPayload>
          }
          createMany: {
            args: Prisma.OrderTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTagPayload>[]
          }
          delete: {
            args: Prisma.OrderTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTagPayload>
          }
          update: {
            args: Prisma.OrderTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTagPayload>
          }
          deleteMany: {
            args: Prisma.OrderTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTagPayload>[]
          }
          upsert: {
            args: Prisma.OrderTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTagPayload>
          }
          aggregate: {
            args: Prisma.OrderTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderTag>
          }
          groupBy: {
            args: Prisma.OrderTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderTagCountArgs<ExtArgs>
            result: $Utils.Optional<OrderTagCountAggregateOutputType> | number
          }
        }
      }
      Wrap: {
        payload: Prisma.$WrapPayload<ExtArgs>
        fields: Prisma.WrapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WrapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WrapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrapPayload>
          }
          findFirst: {
            args: Prisma.WrapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WrapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrapPayload>
          }
          findMany: {
            args: Prisma.WrapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrapPayload>[]
          }
          create: {
            args: Prisma.WrapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrapPayload>
          }
          createMany: {
            args: Prisma.WrapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WrapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrapPayload>[]
          }
          delete: {
            args: Prisma.WrapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrapPayload>
          }
          update: {
            args: Prisma.WrapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrapPayload>
          }
          deleteMany: {
            args: Prisma.WrapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WrapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WrapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrapPayload>[]
          }
          upsert: {
            args: Prisma.WrapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrapPayload>
          }
          aggregate: {
            args: Prisma.WrapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWrap>
          }
          groupBy: {
            args: Prisma.WrapGroupByArgs<ExtArgs>
            result: $Utils.Optional<WrapGroupByOutputType>[]
          }
          count: {
            args: Prisma.WrapCountArgs<ExtArgs>
            result: $Utils.Optional<WrapCountAggregateOutputType> | number
          }
        }
      }
      PreferencePrice: {
        payload: Prisma.$PreferencePricePayload<ExtArgs>
        fields: Prisma.PreferencePriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreferencePriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreferencePriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePricePayload>
          }
          findFirst: {
            args: Prisma.PreferencePriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreferencePriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePricePayload>
          }
          findMany: {
            args: Prisma.PreferencePriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePricePayload>[]
          }
          create: {
            args: Prisma.PreferencePriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePricePayload>
          }
          createMany: {
            args: Prisma.PreferencePriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreferencePriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePricePayload>[]
          }
          delete: {
            args: Prisma.PreferencePriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePricePayload>
          }
          update: {
            args: Prisma.PreferencePriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePricePayload>
          }
          deleteMany: {
            args: Prisma.PreferencePriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreferencePriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreferencePriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePricePayload>[]
          }
          upsert: {
            args: Prisma.PreferencePriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePricePayload>
          }
          aggregate: {
            args: Prisma.PreferencePriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreferencePrice>
          }
          groupBy: {
            args: Prisma.PreferencePriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferencePriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreferencePriceCountArgs<ExtArgs>
            result: $Utils.Optional<PreferencePriceCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    product?: ProductOmit
    category?: CategoryOmit
    combo?: ComboOmit
    comboItem?: ComboItemOmit
    cart?: CartOmit
    cartItem?: CartItemOmit
    deliveryInfo?: DeliveryInfoOmit
    orderTag?: OrderTagOmit
    wrap?: WrapOmit
    preferencePrice?: PreferencePriceOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    combo: number
    deliveryInfo: number
    order: number
    orderTag: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combo?: boolean | UserCountOutputTypeCountComboArgs
    deliveryInfo?: boolean | UserCountOutputTypeCountDeliveryInfoArgs
    order?: boolean | UserCountOutputTypeCountOrderArgs
    orderTag?: boolean | UserCountOutputTypeCountOrderTagArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountComboArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComboWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeliveryInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryInfoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderTagWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    comboItem: number
    cartItem: number
    orderItem: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comboItem?: boolean | ProductCountOutputTypeCountComboItemArgs
    cartItem?: boolean | ProductCountOutputTypeCountCartItemArgs
    orderItem?: boolean | ProductCountOutputTypeCountOrderItemArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountComboItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComboItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ComboCountOutputType
   */

  export type ComboCountOutputType = {
    comboItem: number
    cartItem: number
    orderItem: number
  }

  export type ComboCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comboItem?: boolean | ComboCountOutputTypeCountComboItemArgs
    cartItem?: boolean | ComboCountOutputTypeCountCartItemArgs
    orderItem?: boolean | ComboCountOutputTypeCountOrderItemArgs
  }

  // Custom InputTypes
  /**
   * ComboCountOutputType without action
   */
  export type ComboCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboCountOutputType
     */
    select?: ComboCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComboCountOutputType without action
   */
  export type ComboCountOutputTypeCountComboItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComboItemWhereInput
  }

  /**
   * ComboCountOutputType without action
   */
  export type ComboCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * ComboCountOutputType without action
   */
  export type ComboCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    cartItem: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItem?: boolean | CartCountOutputTypeCountCartItemArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type DeliveryInfoCountOutputType
   */

  export type DeliveryInfoCountOutputType = {
    order: number
  }

  export type DeliveryInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | DeliveryInfoCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * DeliveryInfoCountOutputType without action
   */
  export type DeliveryInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfoCountOutputType
     */
    select?: DeliveryInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeliveryInfoCountOutputType without action
   */
  export type DeliveryInfoCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type OrderTagCountOutputType
   */

  export type OrderTagCountOutputType = {
    orders: number
  }

  export type OrderTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | OrderTagCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * OrderTagCountOutputType without action
   */
  export type OrderTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTagCountOutputType
     */
    select?: OrderTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderTagCountOutputType without action
   */
  export type OrderTagCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type WrapCountOutputType
   */

  export type WrapCountOutputType = {
    orders: number
  }

  export type WrapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | WrapCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * WrapCountOutputType without action
   */
  export type WrapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrapCountOutputType
     */
    select?: WrapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WrapCountOutputType without action
   */
  export type WrapCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type PreferencePriceCountOutputType
   */

  export type PreferencePriceCountOutputType = {
    orders: number
  }

  export type PreferencePriceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | PreferencePriceCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * PreferencePriceCountOutputType without action
   */
  export type PreferencePriceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferencePriceCountOutputType
     */
    select?: PreferencePriceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PreferencePriceCountOutputType without action
   */
  export type PreferencePriceCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    combo?: boolean | User$comboArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    deliveryInfo?: boolean | User$deliveryInfoArgs<ExtArgs>
    order?: boolean | User$orderArgs<ExtArgs>
    orderTag?: boolean | User$orderTagArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combo?: boolean | User$comboArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    deliveryInfo?: boolean | User$deliveryInfoArgs<ExtArgs>
    order?: boolean | User$orderArgs<ExtArgs>
    orderTag?: boolean | User$orderTagArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      combo: Prisma.$ComboPayload<ExtArgs>[]
      cart: Prisma.$CartPayload<ExtArgs> | null
      deliveryInfo: Prisma.$DeliveryInfoPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>[]
      orderTag: Prisma.$OrderTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    combo<T extends User$comboArgs<ExtArgs> = {}>(args?: Subset<T, User$comboArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends User$cartArgs<ExtArgs> = {}>(args?: Subset<T, User$cartArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deliveryInfo<T extends User$deliveryInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$deliveryInfoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends User$orderArgs<ExtArgs> = {}>(args?: Subset<T, User$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderTag<T extends User$orderTagArgs<ExtArgs> = {}>(args?: Subset<T, User$orderTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.combo
   */
  export type User$comboArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    where?: ComboWhereInput
    orderBy?: ComboOrderByWithRelationInput | ComboOrderByWithRelationInput[]
    cursor?: ComboWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComboScalarFieldEnum | ComboScalarFieldEnum[]
  }

  /**
   * User.cart
   */
  export type User$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
  }

  /**
   * User.deliveryInfo
   */
  export type User$deliveryInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfo
     */
    select?: DeliveryInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInfo
     */
    omit?: DeliveryInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInfoInclude<ExtArgs> | null
    where?: DeliveryInfoWhereInput
    orderBy?: DeliveryInfoOrderByWithRelationInput | DeliveryInfoOrderByWithRelationInput[]
    cursor?: DeliveryInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryInfoScalarFieldEnum | DeliveryInfoScalarFieldEnum[]
  }

  /**
   * User.order
   */
  export type User$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.orderTag
   */
  export type User$orderTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTag
     */
    select?: OrderTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderTag
     */
    omit?: OrderTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderTagInclude<ExtArgs> | null
    where?: OrderTagWhereInput
    orderBy?: OrderTagOrderByWithRelationInput | OrderTagOrderByWithRelationInput[]
    cursor?: OrderTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderTagScalarFieldEnum | OrderTagScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    stock: number | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    stock: number | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    imageUrl: number
    stock: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    stock?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    stock?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    stock?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string
    price: number
    imageUrl: string
    stock: number
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    stock?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    comboItem?: boolean | Product$comboItemArgs<ExtArgs>
    cartItem?: boolean | Product$cartItemArgs<ExtArgs>
    orderItem?: boolean | Product$orderItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    stock?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    stock?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    stock?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "imageUrl" | "stock" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    comboItem?: boolean | Product$comboItemArgs<ExtArgs>
    cartItem?: boolean | Product$cartItemArgs<ExtArgs>
    orderItem?: boolean | Product$orderItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      comboItem: Prisma.$ComboItemPayload<ExtArgs>[]
      cartItem: Prisma.$CartItemPayload<ExtArgs>[]
      orderItem: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: number
      imageUrl: string
      stock: number
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comboItem<T extends Product$comboItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$comboItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComboItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartItem<T extends Product$cartItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$cartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItem<T extends Product$orderItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.comboItem
   */
  export type Product$comboItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemInclude<ExtArgs> | null
    where?: ComboItemWhereInput
    orderBy?: ComboItemOrderByWithRelationInput | ComboItemOrderByWithRelationInput[]
    cursor?: ComboItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComboItemScalarFieldEnum | ComboItemScalarFieldEnum[]
  }

  /**
   * Product.cartItem
   */
  export type Product$cartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Product.orderItem
   */
  export type Product$orderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Combo
   */

  export type AggregateCombo = {
    _count: ComboCountAggregateOutputType | null
    _avg: ComboAvgAggregateOutputType | null
    _sum: ComboSumAggregateOutputType | null
    _min: ComboMinAggregateOutputType | null
    _max: ComboMaxAggregateOutputType | null
  }

  export type ComboAvgAggregateOutputType = {
    totalPrice: number | null
    discountAmount: number | null
    perUnitPrice: number | null
    perUnitDiscount: number | null
  }

  export type ComboSumAggregateOutputType = {
    totalPrice: number | null
    discountAmount: number | null
    perUnitPrice: number | null
    perUnitDiscount: number | null
  }

  export type ComboMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    totalPrice: number | null
    discountAmount: number | null
    perUnitPrice: number | null
    perUnitDiscount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComboMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    totalPrice: number | null
    discountAmount: number | null
    perUnitPrice: number | null
    perUnitDiscount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComboCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    totalPrice: number
    discountAmount: number
    perUnitPrice: number
    perUnitDiscount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ComboAvgAggregateInputType = {
    totalPrice?: true
    discountAmount?: true
    perUnitPrice?: true
    perUnitDiscount?: true
  }

  export type ComboSumAggregateInputType = {
    totalPrice?: true
    discountAmount?: true
    perUnitPrice?: true
    perUnitDiscount?: true
  }

  export type ComboMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    totalPrice?: true
    discountAmount?: true
    perUnitPrice?: true
    perUnitDiscount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComboMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    totalPrice?: true
    discountAmount?: true
    perUnitPrice?: true
    perUnitDiscount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComboCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    totalPrice?: true
    discountAmount?: true
    perUnitPrice?: true
    perUnitDiscount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ComboAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Combo to aggregate.
     */
    where?: ComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combos to fetch.
     */
    orderBy?: ComboOrderByWithRelationInput | ComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Combos
    **/
    _count?: true | ComboCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComboAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComboSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComboMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComboMaxAggregateInputType
  }

  export type GetComboAggregateType<T extends ComboAggregateArgs> = {
        [P in keyof T & keyof AggregateCombo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCombo[P]>
      : GetScalarType<T[P], AggregateCombo[P]>
  }




  export type ComboGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComboWhereInput
    orderBy?: ComboOrderByWithAggregationInput | ComboOrderByWithAggregationInput[]
    by: ComboScalarFieldEnum[] | ComboScalarFieldEnum
    having?: ComboScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComboCountAggregateInputType | true
    _avg?: ComboAvgAggregateInputType
    _sum?: ComboSumAggregateInputType
    _min?: ComboMinAggregateInputType
    _max?: ComboMaxAggregateInputType
  }

  export type ComboGroupByOutputType = {
    id: string
    name: string
    userId: string | null
    totalPrice: number | null
    discountAmount: number | null
    perUnitPrice: number | null
    perUnitDiscount: number | null
    createdAt: Date
    updatedAt: Date
    _count: ComboCountAggregateOutputType | null
    _avg: ComboAvgAggregateOutputType | null
    _sum: ComboSumAggregateOutputType | null
    _min: ComboMinAggregateOutputType | null
    _max: ComboMaxAggregateOutputType | null
  }

  type GetComboGroupByPayload<T extends ComboGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComboGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComboGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComboGroupByOutputType[P]>
            : GetScalarType<T[P], ComboGroupByOutputType[P]>
        }
      >
    >


  export type ComboSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    totalPrice?: boolean
    discountAmount?: boolean
    perUnitPrice?: boolean
    perUnitDiscount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Combo$userArgs<ExtArgs>
    comboItem?: boolean | Combo$comboItemArgs<ExtArgs>
    cartItem?: boolean | Combo$cartItemArgs<ExtArgs>
    orderItem?: boolean | Combo$orderItemArgs<ExtArgs>
    _count?: boolean | ComboCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["combo"]>

  export type ComboSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    totalPrice?: boolean
    discountAmount?: boolean
    perUnitPrice?: boolean
    perUnitDiscount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Combo$userArgs<ExtArgs>
  }, ExtArgs["result"]["combo"]>

  export type ComboSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    totalPrice?: boolean
    discountAmount?: boolean
    perUnitPrice?: boolean
    perUnitDiscount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Combo$userArgs<ExtArgs>
  }, ExtArgs["result"]["combo"]>

  export type ComboSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    totalPrice?: boolean
    discountAmount?: boolean
    perUnitPrice?: boolean
    perUnitDiscount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ComboOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "totalPrice" | "discountAmount" | "perUnitPrice" | "perUnitDiscount" | "createdAt" | "updatedAt", ExtArgs["result"]["combo"]>
  export type ComboInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Combo$userArgs<ExtArgs>
    comboItem?: boolean | Combo$comboItemArgs<ExtArgs>
    cartItem?: boolean | Combo$cartItemArgs<ExtArgs>
    orderItem?: boolean | Combo$orderItemArgs<ExtArgs>
    _count?: boolean | ComboCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComboIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Combo$userArgs<ExtArgs>
  }
  export type ComboIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Combo$userArgs<ExtArgs>
  }

  export type $ComboPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Combo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      comboItem: Prisma.$ComboItemPayload<ExtArgs>[]
      cartItem: Prisma.$CartItemPayload<ExtArgs>[]
      orderItem: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string | null
      totalPrice: number | null
      discountAmount: number | null
      perUnitPrice: number | null
      perUnitDiscount: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["combo"]>
    composites: {}
  }

  type ComboGetPayload<S extends boolean | null | undefined | ComboDefaultArgs> = $Result.GetResult<Prisma.$ComboPayload, S>

  type ComboCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComboFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComboCountAggregateInputType | true
    }

  export interface ComboDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Combo'], meta: { name: 'Combo' } }
    /**
     * Find zero or one Combo that matches the filter.
     * @param {ComboFindUniqueArgs} args - Arguments to find a Combo
     * @example
     * // Get one Combo
     * const combo = await prisma.combo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComboFindUniqueArgs>(args: SelectSubset<T, ComboFindUniqueArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Combo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComboFindUniqueOrThrowArgs} args - Arguments to find a Combo
     * @example
     * // Get one Combo
     * const combo = await prisma.combo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComboFindUniqueOrThrowArgs>(args: SelectSubset<T, ComboFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboFindFirstArgs} args - Arguments to find a Combo
     * @example
     * // Get one Combo
     * const combo = await prisma.combo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComboFindFirstArgs>(args?: SelectSubset<T, ComboFindFirstArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboFindFirstOrThrowArgs} args - Arguments to find a Combo
     * @example
     * // Get one Combo
     * const combo = await prisma.combo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComboFindFirstOrThrowArgs>(args?: SelectSubset<T, ComboFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Combos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Combos
     * const combos = await prisma.combo.findMany()
     * 
     * // Get first 10 Combos
     * const combos = await prisma.combo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comboWithIdOnly = await prisma.combo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComboFindManyArgs>(args?: SelectSubset<T, ComboFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Combo.
     * @param {ComboCreateArgs} args - Arguments to create a Combo.
     * @example
     * // Create one Combo
     * const Combo = await prisma.combo.create({
     *   data: {
     *     // ... data to create a Combo
     *   }
     * })
     * 
     */
    create<T extends ComboCreateArgs>(args: SelectSubset<T, ComboCreateArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Combos.
     * @param {ComboCreateManyArgs} args - Arguments to create many Combos.
     * @example
     * // Create many Combos
     * const combo = await prisma.combo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComboCreateManyArgs>(args?: SelectSubset<T, ComboCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Combos and returns the data saved in the database.
     * @param {ComboCreateManyAndReturnArgs} args - Arguments to create many Combos.
     * @example
     * // Create many Combos
     * const combo = await prisma.combo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Combos and only return the `id`
     * const comboWithIdOnly = await prisma.combo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComboCreateManyAndReturnArgs>(args?: SelectSubset<T, ComboCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Combo.
     * @param {ComboDeleteArgs} args - Arguments to delete one Combo.
     * @example
     * // Delete one Combo
     * const Combo = await prisma.combo.delete({
     *   where: {
     *     // ... filter to delete one Combo
     *   }
     * })
     * 
     */
    delete<T extends ComboDeleteArgs>(args: SelectSubset<T, ComboDeleteArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Combo.
     * @param {ComboUpdateArgs} args - Arguments to update one Combo.
     * @example
     * // Update one Combo
     * const combo = await prisma.combo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComboUpdateArgs>(args: SelectSubset<T, ComboUpdateArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Combos.
     * @param {ComboDeleteManyArgs} args - Arguments to filter Combos to delete.
     * @example
     * // Delete a few Combos
     * const { count } = await prisma.combo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComboDeleteManyArgs>(args?: SelectSubset<T, ComboDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Combos
     * const combo = await prisma.combo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComboUpdateManyArgs>(args: SelectSubset<T, ComboUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combos and returns the data updated in the database.
     * @param {ComboUpdateManyAndReturnArgs} args - Arguments to update many Combos.
     * @example
     * // Update many Combos
     * const combo = await prisma.combo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Combos and only return the `id`
     * const comboWithIdOnly = await prisma.combo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComboUpdateManyAndReturnArgs>(args: SelectSubset<T, ComboUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Combo.
     * @param {ComboUpsertArgs} args - Arguments to update or create a Combo.
     * @example
     * // Update or create a Combo
     * const combo = await prisma.combo.upsert({
     *   create: {
     *     // ... data to create a Combo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Combo we want to update
     *   }
     * })
     */
    upsert<T extends ComboUpsertArgs>(args: SelectSubset<T, ComboUpsertArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Combos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboCountArgs} args - Arguments to filter Combos to count.
     * @example
     * // Count the number of Combos
     * const count = await prisma.combo.count({
     *   where: {
     *     // ... the filter for the Combos we want to count
     *   }
     * })
    **/
    count<T extends ComboCountArgs>(
      args?: Subset<T, ComboCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComboCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Combo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComboAggregateArgs>(args: Subset<T, ComboAggregateArgs>): Prisma.PrismaPromise<GetComboAggregateType<T>>

    /**
     * Group by Combo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComboGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComboGroupByArgs['orderBy'] }
        : { orderBy?: ComboGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComboGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComboGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Combo model
   */
  readonly fields: ComboFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Combo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComboClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Combo$userArgs<ExtArgs> = {}>(args?: Subset<T, Combo$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comboItem<T extends Combo$comboItemArgs<ExtArgs> = {}>(args?: Subset<T, Combo$comboItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComboItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartItem<T extends Combo$cartItemArgs<ExtArgs> = {}>(args?: Subset<T, Combo$cartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItem<T extends Combo$orderItemArgs<ExtArgs> = {}>(args?: Subset<T, Combo$orderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Combo model
   */
  interface ComboFieldRefs {
    readonly id: FieldRef<"Combo", 'String'>
    readonly name: FieldRef<"Combo", 'String'>
    readonly userId: FieldRef<"Combo", 'String'>
    readonly totalPrice: FieldRef<"Combo", 'Float'>
    readonly discountAmount: FieldRef<"Combo", 'Float'>
    readonly perUnitPrice: FieldRef<"Combo", 'Float'>
    readonly perUnitDiscount: FieldRef<"Combo", 'Float'>
    readonly createdAt: FieldRef<"Combo", 'DateTime'>
    readonly updatedAt: FieldRef<"Combo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Combo findUnique
   */
  export type ComboFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * Filter, which Combo to fetch.
     */
    where: ComboWhereUniqueInput
  }

  /**
   * Combo findUniqueOrThrow
   */
  export type ComboFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * Filter, which Combo to fetch.
     */
    where: ComboWhereUniqueInput
  }

  /**
   * Combo findFirst
   */
  export type ComboFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * Filter, which Combo to fetch.
     */
    where?: ComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combos to fetch.
     */
    orderBy?: ComboOrderByWithRelationInput | ComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Combos.
     */
    cursor?: ComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Combos.
     */
    distinct?: ComboScalarFieldEnum | ComboScalarFieldEnum[]
  }

  /**
   * Combo findFirstOrThrow
   */
  export type ComboFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * Filter, which Combo to fetch.
     */
    where?: ComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combos to fetch.
     */
    orderBy?: ComboOrderByWithRelationInput | ComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Combos.
     */
    cursor?: ComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Combos.
     */
    distinct?: ComboScalarFieldEnum | ComboScalarFieldEnum[]
  }

  /**
   * Combo findMany
   */
  export type ComboFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * Filter, which Combos to fetch.
     */
    where?: ComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combos to fetch.
     */
    orderBy?: ComboOrderByWithRelationInput | ComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Combos.
     */
    cursor?: ComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combos.
     */
    skip?: number
    distinct?: ComboScalarFieldEnum | ComboScalarFieldEnum[]
  }

  /**
   * Combo create
   */
  export type ComboCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * The data needed to create a Combo.
     */
    data: XOR<ComboCreateInput, ComboUncheckedCreateInput>
  }

  /**
   * Combo createMany
   */
  export type ComboCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Combos.
     */
    data: ComboCreateManyInput | ComboCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Combo createManyAndReturn
   */
  export type ComboCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * The data used to create many Combos.
     */
    data: ComboCreateManyInput | ComboCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Combo update
   */
  export type ComboUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * The data needed to update a Combo.
     */
    data: XOR<ComboUpdateInput, ComboUncheckedUpdateInput>
    /**
     * Choose, which Combo to update.
     */
    where: ComboWhereUniqueInput
  }

  /**
   * Combo updateMany
   */
  export type ComboUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Combos.
     */
    data: XOR<ComboUpdateManyMutationInput, ComboUncheckedUpdateManyInput>
    /**
     * Filter which Combos to update
     */
    where?: ComboWhereInput
    /**
     * Limit how many Combos to update.
     */
    limit?: number
  }

  /**
   * Combo updateManyAndReturn
   */
  export type ComboUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * The data used to update Combos.
     */
    data: XOR<ComboUpdateManyMutationInput, ComboUncheckedUpdateManyInput>
    /**
     * Filter which Combos to update
     */
    where?: ComboWhereInput
    /**
     * Limit how many Combos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Combo upsert
   */
  export type ComboUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * The filter to search for the Combo to update in case it exists.
     */
    where: ComboWhereUniqueInput
    /**
     * In case the Combo found by the `where` argument doesn't exist, create a new Combo with this data.
     */
    create: XOR<ComboCreateInput, ComboUncheckedCreateInput>
    /**
     * In case the Combo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComboUpdateInput, ComboUncheckedUpdateInput>
  }

  /**
   * Combo delete
   */
  export type ComboDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * Filter which Combo to delete.
     */
    where: ComboWhereUniqueInput
  }

  /**
   * Combo deleteMany
   */
  export type ComboDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Combos to delete
     */
    where?: ComboWhereInput
    /**
     * Limit how many Combos to delete.
     */
    limit?: number
  }

  /**
   * Combo.user
   */
  export type Combo$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Combo.comboItem
   */
  export type Combo$comboItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemInclude<ExtArgs> | null
    where?: ComboItemWhereInput
    orderBy?: ComboItemOrderByWithRelationInput | ComboItemOrderByWithRelationInput[]
    cursor?: ComboItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComboItemScalarFieldEnum | ComboItemScalarFieldEnum[]
  }

  /**
   * Combo.cartItem
   */
  export type Combo$cartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Combo.orderItem
   */
  export type Combo$orderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Combo without action
   */
  export type ComboDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
  }


  /**
   * Model ComboItem
   */

  export type AggregateComboItem = {
    _count: ComboItemCountAggregateOutputType | null
    _min: ComboItemMinAggregateOutputType | null
    _max: ComboItemMaxAggregateOutputType | null
  }

  export type ComboItemMinAggregateOutputType = {
    id: string | null
    comboId: string | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComboItemMaxAggregateOutputType = {
    id: string | null
    comboId: string | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComboItemCountAggregateOutputType = {
    id: number
    comboId: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ComboItemMinAggregateInputType = {
    id?: true
    comboId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComboItemMaxAggregateInputType = {
    id?: true
    comboId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComboItemCountAggregateInputType = {
    id?: true
    comboId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ComboItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComboItem to aggregate.
     */
    where?: ComboItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComboItems to fetch.
     */
    orderBy?: ComboItemOrderByWithRelationInput | ComboItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComboItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComboItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComboItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComboItems
    **/
    _count?: true | ComboItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComboItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComboItemMaxAggregateInputType
  }

  export type GetComboItemAggregateType<T extends ComboItemAggregateArgs> = {
        [P in keyof T & keyof AggregateComboItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComboItem[P]>
      : GetScalarType<T[P], AggregateComboItem[P]>
  }




  export type ComboItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComboItemWhereInput
    orderBy?: ComboItemOrderByWithAggregationInput | ComboItemOrderByWithAggregationInput[]
    by: ComboItemScalarFieldEnum[] | ComboItemScalarFieldEnum
    having?: ComboItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComboItemCountAggregateInputType | true
    _min?: ComboItemMinAggregateInputType
    _max?: ComboItemMaxAggregateInputType
  }

  export type ComboItemGroupByOutputType = {
    id: string
    comboId: string
    productId: string
    createdAt: Date
    updatedAt: Date
    _count: ComboItemCountAggregateOutputType | null
    _min: ComboItemMinAggregateOutputType | null
    _max: ComboItemMaxAggregateOutputType | null
  }

  type GetComboItemGroupByPayload<T extends ComboItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComboItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComboItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComboItemGroupByOutputType[P]>
            : GetScalarType<T[P], ComboItemGroupByOutputType[P]>
        }
      >
    >


  export type ComboItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comboId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    combo?: boolean | ComboDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comboItem"]>

  export type ComboItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comboId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    combo?: boolean | ComboDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comboItem"]>

  export type ComboItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comboId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    combo?: boolean | ComboDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comboItem"]>

  export type ComboItemSelectScalar = {
    id?: boolean
    comboId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ComboItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comboId" | "productId" | "createdAt" | "updatedAt", ExtArgs["result"]["comboItem"]>
  export type ComboItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combo?: boolean | ComboDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ComboItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combo?: boolean | ComboDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ComboItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combo?: boolean | ComboDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ComboItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComboItem"
    objects: {
      combo: Prisma.$ComboPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      comboId: string
      productId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comboItem"]>
    composites: {}
  }

  type ComboItemGetPayload<S extends boolean | null | undefined | ComboItemDefaultArgs> = $Result.GetResult<Prisma.$ComboItemPayload, S>

  type ComboItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComboItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComboItemCountAggregateInputType | true
    }

  export interface ComboItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComboItem'], meta: { name: 'ComboItem' } }
    /**
     * Find zero or one ComboItem that matches the filter.
     * @param {ComboItemFindUniqueArgs} args - Arguments to find a ComboItem
     * @example
     * // Get one ComboItem
     * const comboItem = await prisma.comboItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComboItemFindUniqueArgs>(args: SelectSubset<T, ComboItemFindUniqueArgs<ExtArgs>>): Prisma__ComboItemClient<$Result.GetResult<Prisma.$ComboItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComboItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComboItemFindUniqueOrThrowArgs} args - Arguments to find a ComboItem
     * @example
     * // Get one ComboItem
     * const comboItem = await prisma.comboItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComboItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ComboItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComboItemClient<$Result.GetResult<Prisma.$ComboItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComboItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboItemFindFirstArgs} args - Arguments to find a ComboItem
     * @example
     * // Get one ComboItem
     * const comboItem = await prisma.comboItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComboItemFindFirstArgs>(args?: SelectSubset<T, ComboItemFindFirstArgs<ExtArgs>>): Prisma__ComboItemClient<$Result.GetResult<Prisma.$ComboItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComboItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboItemFindFirstOrThrowArgs} args - Arguments to find a ComboItem
     * @example
     * // Get one ComboItem
     * const comboItem = await prisma.comboItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComboItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ComboItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComboItemClient<$Result.GetResult<Prisma.$ComboItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComboItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComboItems
     * const comboItems = await prisma.comboItem.findMany()
     * 
     * // Get first 10 ComboItems
     * const comboItems = await prisma.comboItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comboItemWithIdOnly = await prisma.comboItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComboItemFindManyArgs>(args?: SelectSubset<T, ComboItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComboItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComboItem.
     * @param {ComboItemCreateArgs} args - Arguments to create a ComboItem.
     * @example
     * // Create one ComboItem
     * const ComboItem = await prisma.comboItem.create({
     *   data: {
     *     // ... data to create a ComboItem
     *   }
     * })
     * 
     */
    create<T extends ComboItemCreateArgs>(args: SelectSubset<T, ComboItemCreateArgs<ExtArgs>>): Prisma__ComboItemClient<$Result.GetResult<Prisma.$ComboItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComboItems.
     * @param {ComboItemCreateManyArgs} args - Arguments to create many ComboItems.
     * @example
     * // Create many ComboItems
     * const comboItem = await prisma.comboItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComboItemCreateManyArgs>(args?: SelectSubset<T, ComboItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ComboItems and returns the data saved in the database.
     * @param {ComboItemCreateManyAndReturnArgs} args - Arguments to create many ComboItems.
     * @example
     * // Create many ComboItems
     * const comboItem = await prisma.comboItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ComboItems and only return the `id`
     * const comboItemWithIdOnly = await prisma.comboItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComboItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ComboItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComboItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ComboItem.
     * @param {ComboItemDeleteArgs} args - Arguments to delete one ComboItem.
     * @example
     * // Delete one ComboItem
     * const ComboItem = await prisma.comboItem.delete({
     *   where: {
     *     // ... filter to delete one ComboItem
     *   }
     * })
     * 
     */
    delete<T extends ComboItemDeleteArgs>(args: SelectSubset<T, ComboItemDeleteArgs<ExtArgs>>): Prisma__ComboItemClient<$Result.GetResult<Prisma.$ComboItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComboItem.
     * @param {ComboItemUpdateArgs} args - Arguments to update one ComboItem.
     * @example
     * // Update one ComboItem
     * const comboItem = await prisma.comboItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComboItemUpdateArgs>(args: SelectSubset<T, ComboItemUpdateArgs<ExtArgs>>): Prisma__ComboItemClient<$Result.GetResult<Prisma.$ComboItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComboItems.
     * @param {ComboItemDeleteManyArgs} args - Arguments to filter ComboItems to delete.
     * @example
     * // Delete a few ComboItems
     * const { count } = await prisma.comboItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComboItemDeleteManyArgs>(args?: SelectSubset<T, ComboItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComboItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComboItems
     * const comboItem = await prisma.comboItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComboItemUpdateManyArgs>(args: SelectSubset<T, ComboItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComboItems and returns the data updated in the database.
     * @param {ComboItemUpdateManyAndReturnArgs} args - Arguments to update many ComboItems.
     * @example
     * // Update many ComboItems
     * const comboItem = await prisma.comboItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ComboItems and only return the `id`
     * const comboItemWithIdOnly = await prisma.comboItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComboItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ComboItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComboItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ComboItem.
     * @param {ComboItemUpsertArgs} args - Arguments to update or create a ComboItem.
     * @example
     * // Update or create a ComboItem
     * const comboItem = await prisma.comboItem.upsert({
     *   create: {
     *     // ... data to create a ComboItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComboItem we want to update
     *   }
     * })
     */
    upsert<T extends ComboItemUpsertArgs>(args: SelectSubset<T, ComboItemUpsertArgs<ExtArgs>>): Prisma__ComboItemClient<$Result.GetResult<Prisma.$ComboItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComboItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboItemCountArgs} args - Arguments to filter ComboItems to count.
     * @example
     * // Count the number of ComboItems
     * const count = await prisma.comboItem.count({
     *   where: {
     *     // ... the filter for the ComboItems we want to count
     *   }
     * })
    **/
    count<T extends ComboItemCountArgs>(
      args?: Subset<T, ComboItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComboItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComboItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComboItemAggregateArgs>(args: Subset<T, ComboItemAggregateArgs>): Prisma.PrismaPromise<GetComboItemAggregateType<T>>

    /**
     * Group by ComboItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComboItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComboItemGroupByArgs['orderBy'] }
        : { orderBy?: ComboItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComboItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComboItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComboItem model
   */
  readonly fields: ComboItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComboItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComboItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    combo<T extends ComboDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComboDefaultArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ComboItem model
   */
  interface ComboItemFieldRefs {
    readonly id: FieldRef<"ComboItem", 'String'>
    readonly comboId: FieldRef<"ComboItem", 'String'>
    readonly productId: FieldRef<"ComboItem", 'String'>
    readonly createdAt: FieldRef<"ComboItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ComboItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ComboItem findUnique
   */
  export type ComboItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemInclude<ExtArgs> | null
    /**
     * Filter, which ComboItem to fetch.
     */
    where: ComboItemWhereUniqueInput
  }

  /**
   * ComboItem findUniqueOrThrow
   */
  export type ComboItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemInclude<ExtArgs> | null
    /**
     * Filter, which ComboItem to fetch.
     */
    where: ComboItemWhereUniqueInput
  }

  /**
   * ComboItem findFirst
   */
  export type ComboItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemInclude<ExtArgs> | null
    /**
     * Filter, which ComboItem to fetch.
     */
    where?: ComboItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComboItems to fetch.
     */
    orderBy?: ComboItemOrderByWithRelationInput | ComboItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComboItems.
     */
    cursor?: ComboItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComboItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComboItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComboItems.
     */
    distinct?: ComboItemScalarFieldEnum | ComboItemScalarFieldEnum[]
  }

  /**
   * ComboItem findFirstOrThrow
   */
  export type ComboItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemInclude<ExtArgs> | null
    /**
     * Filter, which ComboItem to fetch.
     */
    where?: ComboItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComboItems to fetch.
     */
    orderBy?: ComboItemOrderByWithRelationInput | ComboItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComboItems.
     */
    cursor?: ComboItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComboItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComboItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComboItems.
     */
    distinct?: ComboItemScalarFieldEnum | ComboItemScalarFieldEnum[]
  }

  /**
   * ComboItem findMany
   */
  export type ComboItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemInclude<ExtArgs> | null
    /**
     * Filter, which ComboItems to fetch.
     */
    where?: ComboItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComboItems to fetch.
     */
    orderBy?: ComboItemOrderByWithRelationInput | ComboItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComboItems.
     */
    cursor?: ComboItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComboItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComboItems.
     */
    skip?: number
    distinct?: ComboItemScalarFieldEnum | ComboItemScalarFieldEnum[]
  }

  /**
   * ComboItem create
   */
  export type ComboItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ComboItem.
     */
    data: XOR<ComboItemCreateInput, ComboItemUncheckedCreateInput>
  }

  /**
   * ComboItem createMany
   */
  export type ComboItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComboItems.
     */
    data: ComboItemCreateManyInput | ComboItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComboItem createManyAndReturn
   */
  export type ComboItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * The data used to create many ComboItems.
     */
    data: ComboItemCreateManyInput | ComboItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComboItem update
   */
  export type ComboItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ComboItem.
     */
    data: XOR<ComboItemUpdateInput, ComboItemUncheckedUpdateInput>
    /**
     * Choose, which ComboItem to update.
     */
    where: ComboItemWhereUniqueInput
  }

  /**
   * ComboItem updateMany
   */
  export type ComboItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComboItems.
     */
    data: XOR<ComboItemUpdateManyMutationInput, ComboItemUncheckedUpdateManyInput>
    /**
     * Filter which ComboItems to update
     */
    where?: ComboItemWhereInput
    /**
     * Limit how many ComboItems to update.
     */
    limit?: number
  }

  /**
   * ComboItem updateManyAndReturn
   */
  export type ComboItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * The data used to update ComboItems.
     */
    data: XOR<ComboItemUpdateManyMutationInput, ComboItemUncheckedUpdateManyInput>
    /**
     * Filter which ComboItems to update
     */
    where?: ComboItemWhereInput
    /**
     * Limit how many ComboItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComboItem upsert
   */
  export type ComboItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ComboItem to update in case it exists.
     */
    where: ComboItemWhereUniqueInput
    /**
     * In case the ComboItem found by the `where` argument doesn't exist, create a new ComboItem with this data.
     */
    create: XOR<ComboItemCreateInput, ComboItemUncheckedCreateInput>
    /**
     * In case the ComboItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComboItemUpdateInput, ComboItemUncheckedUpdateInput>
  }

  /**
   * ComboItem delete
   */
  export type ComboItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemInclude<ExtArgs> | null
    /**
     * Filter which ComboItem to delete.
     */
    where: ComboItemWhereUniqueInput
  }

  /**
   * ComboItem deleteMany
   */
  export type ComboItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComboItems to delete
     */
    where?: ComboItemWhereInput
    /**
     * Limit how many ComboItems to delete.
     */
    limit?: number
  }

  /**
   * ComboItem without action
   */
  export type ComboItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboItem
     */
    select?: ComboItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComboItem
     */
    omit?: ComboItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboItemInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cartItem?: boolean | Cart$cartItemArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cartItem?: boolean | Cart$cartItemArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cartItem: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartCreateManyAndReturnArgs>(args?: SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(args: SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cartItem<T extends Cart$cartItemArgs<ExtArgs> = {}>(args?: Subset<T, Cart$cartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'String'>
    readonly userId: FieldRef<"Cart", 'String'>
    readonly createdAt: FieldRef<"Cart", 'DateTime'>
    readonly updatedAt: FieldRef<"Cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart createManyAndReturn
   */
  export type CartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart updateManyAndReturn
   */
  export type CartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.cartItem
   */
  export type Cart$cartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type CartItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: string | null
    comboId: string | null
    productId: string | null
    cartId: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: string | null
    comboId: string | null
    productId: string | null
    cartId: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    comboId: number
    productId: number
    cartId: number
    quantity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    quantity?: true
  }

  export type CartItemSumAggregateInputType = {
    quantity?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    comboId?: true
    productId?: true
    cartId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    comboId?: true
    productId?: true
    cartId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    comboId?: true
    productId?: true
    cartId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: string
    comboId: string | null
    productId: string | null
    cartId: string
    quantity: number
    createdAt: Date
    updatedAt: Date
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comboId?: boolean
    productId?: boolean
    cartId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    combo?: boolean | CartItem$comboArgs<ExtArgs>
    product?: boolean | CartItem$productArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comboId?: boolean
    productId?: boolean
    cartId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    combo?: boolean | CartItem$comboArgs<ExtArgs>
    product?: boolean | CartItem$productArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comboId?: boolean
    productId?: boolean
    cartId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    combo?: boolean | CartItem$comboArgs<ExtArgs>
    product?: boolean | CartItem$productArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean
    comboId?: boolean
    productId?: boolean
    cartId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comboId" | "productId" | "cartId" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combo?: boolean | CartItem$comboArgs<ExtArgs>
    product?: boolean | CartItem$productArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combo?: boolean | CartItem$comboArgs<ExtArgs>
    product?: boolean | CartItem$productArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combo?: boolean | CartItem$comboArgs<ExtArgs>
    product?: boolean | CartItem$productArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      combo: Prisma.$ComboPayload<ExtArgs> | null
      product: Prisma.$ProductPayload<ExtArgs> | null
      cart: Prisma.$CartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      comboId: string | null
      productId: string | null
      cartId: string
      quantity: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    combo<T extends CartItem$comboArgs<ExtArgs> = {}>(args?: Subset<T, CartItem$comboArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    product<T extends CartItem$productArgs<ExtArgs> = {}>(args?: Subset<T, CartItem$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'String'>
    readonly comboId: FieldRef<"CartItem", 'String'>
    readonly productId: FieldRef<"CartItem", 'String'>
    readonly cartId: FieldRef<"CartItem", 'String'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
    readonly createdAt: FieldRef<"CartItem", 'DateTime'>
    readonly updatedAt: FieldRef<"CartItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem.combo
   */
  export type CartItem$comboArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    where?: ComboWhereInput
  }

  /**
   * CartItem.product
   */
  export type CartItem$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Model DeliveryInfo
   */

  export type AggregateDeliveryInfo = {
    _count: DeliveryInfoCountAggregateOutputType | null
    _min: DeliveryInfoMinAggregateOutputType | null
    _max: DeliveryInfoMaxAggregateOutputType | null
  }

  export type DeliveryInfoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    contact: string | null
    addressLine: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveryInfoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    contact: string | null
    addressLine: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveryInfoCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    contact: number
    addressLine: number
    city: number
    state: number
    postalCode: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeliveryInfoMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    contact?: true
    addressLine?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveryInfoMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    contact?: true
    addressLine?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveryInfoCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    contact?: true
    addressLine?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeliveryInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryInfo to aggregate.
     */
    where?: DeliveryInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryInfos to fetch.
     */
    orderBy?: DeliveryInfoOrderByWithRelationInput | DeliveryInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryInfos
    **/
    _count?: true | DeliveryInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryInfoMaxAggregateInputType
  }

  export type GetDeliveryInfoAggregateType<T extends DeliveryInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryInfo[P]>
      : GetScalarType<T[P], AggregateDeliveryInfo[P]>
  }




  export type DeliveryInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryInfoWhereInput
    orderBy?: DeliveryInfoOrderByWithAggregationInput | DeliveryInfoOrderByWithAggregationInput[]
    by: DeliveryInfoScalarFieldEnum[] | DeliveryInfoScalarFieldEnum
    having?: DeliveryInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryInfoCountAggregateInputType | true
    _min?: DeliveryInfoMinAggregateInputType
    _max?: DeliveryInfoMaxAggregateInputType
  }

  export type DeliveryInfoGroupByOutputType = {
    id: string
    userId: string
    name: string
    contact: string
    addressLine: string
    city: string
    state: string
    postalCode: string
    country: string
    createdAt: Date
    updatedAt: Date
    _count: DeliveryInfoCountAggregateOutputType | null
    _min: DeliveryInfoMinAggregateOutputType | null
    _max: DeliveryInfoMaxAggregateOutputType | null
  }

  type GetDeliveryInfoGroupByPayload<T extends DeliveryInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryInfoGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryInfoGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    contact?: boolean
    addressLine?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | DeliveryInfo$orderArgs<ExtArgs>
    _count?: boolean | DeliveryInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryInfo"]>

  export type DeliveryInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    contact?: boolean
    addressLine?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryInfo"]>

  export type DeliveryInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    contact?: boolean
    addressLine?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryInfo"]>

  export type DeliveryInfoSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    contact?: boolean
    addressLine?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeliveryInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "contact" | "addressLine" | "city" | "state" | "postalCode" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["deliveryInfo"]>
  export type DeliveryInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | DeliveryInfo$orderArgs<ExtArgs>
    _count?: boolean | DeliveryInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeliveryInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeliveryInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeliveryInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      contact: string
      addressLine: string
      city: string
      state: string
      postalCode: string
      country: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deliveryInfo"]>
    composites: {}
  }

  type DeliveryInfoGetPayload<S extends boolean | null | undefined | DeliveryInfoDefaultArgs> = $Result.GetResult<Prisma.$DeliveryInfoPayload, S>

  type DeliveryInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryInfoCountAggregateInputType | true
    }

  export interface DeliveryInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryInfo'], meta: { name: 'DeliveryInfo' } }
    /**
     * Find zero or one DeliveryInfo that matches the filter.
     * @param {DeliveryInfoFindUniqueArgs} args - Arguments to find a DeliveryInfo
     * @example
     * // Get one DeliveryInfo
     * const deliveryInfo = await prisma.deliveryInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryInfoFindUniqueArgs>(args: SelectSubset<T, DeliveryInfoFindUniqueArgs<ExtArgs>>): Prisma__DeliveryInfoClient<$Result.GetResult<Prisma.$DeliveryInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeliveryInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryInfoFindUniqueOrThrowArgs} args - Arguments to find a DeliveryInfo
     * @example
     * // Get one DeliveryInfo
     * const deliveryInfo = await prisma.deliveryInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryInfoClient<$Result.GetResult<Prisma.$DeliveryInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInfoFindFirstArgs} args - Arguments to find a DeliveryInfo
     * @example
     * // Get one DeliveryInfo
     * const deliveryInfo = await prisma.deliveryInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryInfoFindFirstArgs>(args?: SelectSubset<T, DeliveryInfoFindFirstArgs<ExtArgs>>): Prisma__DeliveryInfoClient<$Result.GetResult<Prisma.$DeliveryInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInfoFindFirstOrThrowArgs} args - Arguments to find a DeliveryInfo
     * @example
     * // Get one DeliveryInfo
     * const deliveryInfo = await prisma.deliveryInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryInfoClient<$Result.GetResult<Prisma.$DeliveryInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeliveryInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryInfos
     * const deliveryInfos = await prisma.deliveryInfo.findMany()
     * 
     * // Get first 10 DeliveryInfos
     * const deliveryInfos = await prisma.deliveryInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryInfoWithIdOnly = await prisma.deliveryInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryInfoFindManyArgs>(args?: SelectSubset<T, DeliveryInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeliveryInfo.
     * @param {DeliveryInfoCreateArgs} args - Arguments to create a DeliveryInfo.
     * @example
     * // Create one DeliveryInfo
     * const DeliveryInfo = await prisma.deliveryInfo.create({
     *   data: {
     *     // ... data to create a DeliveryInfo
     *   }
     * })
     * 
     */
    create<T extends DeliveryInfoCreateArgs>(args: SelectSubset<T, DeliveryInfoCreateArgs<ExtArgs>>): Prisma__DeliveryInfoClient<$Result.GetResult<Prisma.$DeliveryInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeliveryInfos.
     * @param {DeliveryInfoCreateManyArgs} args - Arguments to create many DeliveryInfos.
     * @example
     * // Create many DeliveryInfos
     * const deliveryInfo = await prisma.deliveryInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryInfoCreateManyArgs>(args?: SelectSubset<T, DeliveryInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryInfos and returns the data saved in the database.
     * @param {DeliveryInfoCreateManyAndReturnArgs} args - Arguments to create many DeliveryInfos.
     * @example
     * // Create many DeliveryInfos
     * const deliveryInfo = await prisma.deliveryInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryInfos and only return the `id`
     * const deliveryInfoWithIdOnly = await prisma.deliveryInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeliveryInfo.
     * @param {DeliveryInfoDeleteArgs} args - Arguments to delete one DeliveryInfo.
     * @example
     * // Delete one DeliveryInfo
     * const DeliveryInfo = await prisma.deliveryInfo.delete({
     *   where: {
     *     // ... filter to delete one DeliveryInfo
     *   }
     * })
     * 
     */
    delete<T extends DeliveryInfoDeleteArgs>(args: SelectSubset<T, DeliveryInfoDeleteArgs<ExtArgs>>): Prisma__DeliveryInfoClient<$Result.GetResult<Prisma.$DeliveryInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeliveryInfo.
     * @param {DeliveryInfoUpdateArgs} args - Arguments to update one DeliveryInfo.
     * @example
     * // Update one DeliveryInfo
     * const deliveryInfo = await prisma.deliveryInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryInfoUpdateArgs>(args: SelectSubset<T, DeliveryInfoUpdateArgs<ExtArgs>>): Prisma__DeliveryInfoClient<$Result.GetResult<Prisma.$DeliveryInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeliveryInfos.
     * @param {DeliveryInfoDeleteManyArgs} args - Arguments to filter DeliveryInfos to delete.
     * @example
     * // Delete a few DeliveryInfos
     * const { count } = await prisma.deliveryInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryInfoDeleteManyArgs>(args?: SelectSubset<T, DeliveryInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryInfos
     * const deliveryInfo = await prisma.deliveryInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryInfoUpdateManyArgs>(args: SelectSubset<T, DeliveryInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryInfos and returns the data updated in the database.
     * @param {DeliveryInfoUpdateManyAndReturnArgs} args - Arguments to update many DeliveryInfos.
     * @example
     * // Update many DeliveryInfos
     * const deliveryInfo = await prisma.deliveryInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeliveryInfos and only return the `id`
     * const deliveryInfoWithIdOnly = await prisma.deliveryInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeliveryInfo.
     * @param {DeliveryInfoUpsertArgs} args - Arguments to update or create a DeliveryInfo.
     * @example
     * // Update or create a DeliveryInfo
     * const deliveryInfo = await prisma.deliveryInfo.upsert({
     *   create: {
     *     // ... data to create a DeliveryInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryInfo we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryInfoUpsertArgs>(args: SelectSubset<T, DeliveryInfoUpsertArgs<ExtArgs>>): Prisma__DeliveryInfoClient<$Result.GetResult<Prisma.$DeliveryInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeliveryInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInfoCountArgs} args - Arguments to filter DeliveryInfos to count.
     * @example
     * // Count the number of DeliveryInfos
     * const count = await prisma.deliveryInfo.count({
     *   where: {
     *     // ... the filter for the DeliveryInfos we want to count
     *   }
     * })
    **/
    count<T extends DeliveryInfoCountArgs>(
      args?: Subset<T, DeliveryInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryInfoAggregateArgs>(args: Subset<T, DeliveryInfoAggregateArgs>): Prisma.PrismaPromise<GetDeliveryInfoAggregateType<T>>

    /**
     * Group by DeliveryInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryInfoGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryInfo model
   */
  readonly fields: DeliveryInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends DeliveryInfo$orderArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryInfo$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeliveryInfo model
   */
  interface DeliveryInfoFieldRefs {
    readonly id: FieldRef<"DeliveryInfo", 'String'>
    readonly userId: FieldRef<"DeliveryInfo", 'String'>
    readonly name: FieldRef<"DeliveryInfo", 'String'>
    readonly contact: FieldRef<"DeliveryInfo", 'String'>
    readonly addressLine: FieldRef<"DeliveryInfo", 'String'>
    readonly city: FieldRef<"DeliveryInfo", 'String'>
    readonly state: FieldRef<"DeliveryInfo", 'String'>
    readonly postalCode: FieldRef<"DeliveryInfo", 'String'>
    readonly country: FieldRef<"DeliveryInfo", 'String'>
    readonly createdAt: FieldRef<"DeliveryInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"DeliveryInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryInfo findUnique
   */
  export type DeliveryInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfo
     */
    select?: DeliveryInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInfo
     */
    omit?: DeliveryInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInfoInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryInfo to fetch.
     */
    where: DeliveryInfoWhereUniqueInput
  }

  /**
   * DeliveryInfo findUniqueOrThrow
   */
  export type DeliveryInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfo
     */
    select?: DeliveryInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInfo
     */
    omit?: DeliveryInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInfoInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryInfo to fetch.
     */
    where: DeliveryInfoWhereUniqueInput
  }

  /**
   * DeliveryInfo findFirst
   */
  export type DeliveryInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfo
     */
    select?: DeliveryInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInfo
     */
    omit?: DeliveryInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInfoInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryInfo to fetch.
     */
    where?: DeliveryInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryInfos to fetch.
     */
    orderBy?: DeliveryInfoOrderByWithRelationInput | DeliveryInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryInfos.
     */
    cursor?: DeliveryInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryInfos.
     */
    distinct?: DeliveryInfoScalarFieldEnum | DeliveryInfoScalarFieldEnum[]
  }

  /**
   * DeliveryInfo findFirstOrThrow
   */
  export type DeliveryInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfo
     */
    select?: DeliveryInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInfo
     */
    omit?: DeliveryInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInfoInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryInfo to fetch.
     */
    where?: DeliveryInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryInfos to fetch.
     */
    orderBy?: DeliveryInfoOrderByWithRelationInput | DeliveryInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryInfos.
     */
    cursor?: DeliveryInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryInfos.
     */
    distinct?: DeliveryInfoScalarFieldEnum | DeliveryInfoScalarFieldEnum[]
  }

  /**
   * DeliveryInfo findMany
   */
  export type DeliveryInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfo
     */
    select?: DeliveryInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInfo
     */
    omit?: DeliveryInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInfoInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryInfos to fetch.
     */
    where?: DeliveryInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryInfos to fetch.
     */
    orderBy?: DeliveryInfoOrderByWithRelationInput | DeliveryInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryInfos.
     */
    cursor?: DeliveryInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryInfos.
     */
    skip?: number
    distinct?: DeliveryInfoScalarFieldEnum | DeliveryInfoScalarFieldEnum[]
  }

  /**
   * DeliveryInfo create
   */
  export type DeliveryInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfo
     */
    select?: DeliveryInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInfo
     */
    omit?: DeliveryInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryInfo.
     */
    data: XOR<DeliveryInfoCreateInput, DeliveryInfoUncheckedCreateInput>
  }

  /**
   * DeliveryInfo createMany
   */
  export type DeliveryInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryInfos.
     */
    data: DeliveryInfoCreateManyInput | DeliveryInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryInfo createManyAndReturn
   */
  export type DeliveryInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfo
     */
    select?: DeliveryInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInfo
     */
    omit?: DeliveryInfoOmit<ExtArgs> | null
    /**
     * The data used to create many DeliveryInfos.
     */
    data: DeliveryInfoCreateManyInput | DeliveryInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryInfo update
   */
  export type DeliveryInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfo
     */
    select?: DeliveryInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInfo
     */
    omit?: DeliveryInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryInfo.
     */
    data: XOR<DeliveryInfoUpdateInput, DeliveryInfoUncheckedUpdateInput>
    /**
     * Choose, which DeliveryInfo to update.
     */
    where: DeliveryInfoWhereUniqueInput
  }

  /**
   * DeliveryInfo updateMany
   */
  export type DeliveryInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryInfos.
     */
    data: XOR<DeliveryInfoUpdateManyMutationInput, DeliveryInfoUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryInfos to update
     */
    where?: DeliveryInfoWhereInput
    /**
     * Limit how many DeliveryInfos to update.
     */
    limit?: number
  }

  /**
   * DeliveryInfo updateManyAndReturn
   */
  export type DeliveryInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfo
     */
    select?: DeliveryInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInfo
     */
    omit?: DeliveryInfoOmit<ExtArgs> | null
    /**
     * The data used to update DeliveryInfos.
     */
    data: XOR<DeliveryInfoUpdateManyMutationInput, DeliveryInfoUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryInfos to update
     */
    where?: DeliveryInfoWhereInput
    /**
     * Limit how many DeliveryInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryInfo upsert
   */
  export type DeliveryInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfo
     */
    select?: DeliveryInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInfo
     */
    omit?: DeliveryInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryInfo to update in case it exists.
     */
    where: DeliveryInfoWhereUniqueInput
    /**
     * In case the DeliveryInfo found by the `where` argument doesn't exist, create a new DeliveryInfo with this data.
     */
    create: XOR<DeliveryInfoCreateInput, DeliveryInfoUncheckedCreateInput>
    /**
     * In case the DeliveryInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryInfoUpdateInput, DeliveryInfoUncheckedUpdateInput>
  }

  /**
   * DeliveryInfo delete
   */
  export type DeliveryInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfo
     */
    select?: DeliveryInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInfo
     */
    omit?: DeliveryInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInfoInclude<ExtArgs> | null
    /**
     * Filter which DeliveryInfo to delete.
     */
    where: DeliveryInfoWhereUniqueInput
  }

  /**
   * DeliveryInfo deleteMany
   */
  export type DeliveryInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryInfos to delete
     */
    where?: DeliveryInfoWhereInput
    /**
     * Limit how many DeliveryInfos to delete.
     */
    limit?: number
  }

  /**
   * DeliveryInfo.order
   */
  export type DeliveryInfo$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * DeliveryInfo without action
   */
  export type DeliveryInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryInfo
     */
    select?: DeliveryInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryInfo
     */
    omit?: DeliveryInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInfoInclude<ExtArgs> | null
  }


  /**
   * Model OrderTag
   */

  export type AggregateOrderTag = {
    _count: OrderTagCountAggregateOutputType | null
    _avg: OrderTagAvgAggregateOutputType | null
    _sum: OrderTagSumAggregateOutputType | null
    _min: OrderTagMinAggregateOutputType | null
    _max: OrderTagMaxAggregateOutputType | null
  }

  export type OrderTagAvgAggregateOutputType = {
    price: number | null
  }

  export type OrderTagSumAggregateOutputType = {
    price: number | null
  }

  export type OrderTagMinAggregateOutputType = {
    id: string | null
    name: string | null
    isPublic: boolean | null
    price: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderTagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isPublic: boolean | null
    price: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderTagCountAggregateOutputType = {
    id: number
    name: number
    isPublic: number
    price: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderTagAvgAggregateInputType = {
    price?: true
  }

  export type OrderTagSumAggregateInputType = {
    price?: true
  }

  export type OrderTagMinAggregateInputType = {
    id?: true
    name?: true
    isPublic?: true
    price?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderTagMaxAggregateInputType = {
    id?: true
    name?: true
    isPublic?: true
    price?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderTagCountAggregateInputType = {
    id?: true
    name?: true
    isPublic?: true
    price?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderTag to aggregate.
     */
    where?: OrderTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderTags to fetch.
     */
    orderBy?: OrderTagOrderByWithRelationInput | OrderTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderTags
    **/
    _count?: true | OrderTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderTagMaxAggregateInputType
  }

  export type GetOrderTagAggregateType<T extends OrderTagAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderTag[P]>
      : GetScalarType<T[P], AggregateOrderTag[P]>
  }




  export type OrderTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderTagWhereInput
    orderBy?: OrderTagOrderByWithAggregationInput | OrderTagOrderByWithAggregationInput[]
    by: OrderTagScalarFieldEnum[] | OrderTagScalarFieldEnum
    having?: OrderTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderTagCountAggregateInputType | true
    _avg?: OrderTagAvgAggregateInputType
    _sum?: OrderTagSumAggregateInputType
    _min?: OrderTagMinAggregateInputType
    _max?: OrderTagMaxAggregateInputType
  }

  export type OrderTagGroupByOutputType = {
    id: string
    name: string
    isPublic: boolean
    price: number
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: OrderTagCountAggregateOutputType | null
    _avg: OrderTagAvgAggregateOutputType | null
    _sum: OrderTagSumAggregateOutputType | null
    _min: OrderTagMinAggregateOutputType | null
    _max: OrderTagMaxAggregateOutputType | null
  }

  type GetOrderTagGroupByPayload<T extends OrderTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderTagGroupByOutputType[P]>
            : GetScalarType<T[P], OrderTagGroupByOutputType[P]>
        }
      >
    >


  export type OrderTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isPublic?: boolean
    price?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    orders?: boolean | OrderTag$ordersArgs<ExtArgs>
    _count?: boolean | OrderTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderTag"]>

  export type OrderTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isPublic?: boolean
    price?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderTag"]>

  export type OrderTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isPublic?: boolean
    price?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderTag"]>

  export type OrderTagSelectScalar = {
    id?: boolean
    name?: boolean
    isPublic?: boolean
    price?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isPublic" | "price" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["orderTag"]>
  export type OrderTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    orders?: boolean | OrderTag$ordersArgs<ExtArgs>
    _count?: boolean | OrderTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderTag"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isPublic: boolean
      price: number
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderTag"]>
    composites: {}
  }

  type OrderTagGetPayload<S extends boolean | null | undefined | OrderTagDefaultArgs> = $Result.GetResult<Prisma.$OrderTagPayload, S>

  type OrderTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderTagCountAggregateInputType | true
    }

  export interface OrderTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderTag'], meta: { name: 'OrderTag' } }
    /**
     * Find zero or one OrderTag that matches the filter.
     * @param {OrderTagFindUniqueArgs} args - Arguments to find a OrderTag
     * @example
     * // Get one OrderTag
     * const orderTag = await prisma.orderTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderTagFindUniqueArgs>(args: SelectSubset<T, OrderTagFindUniqueArgs<ExtArgs>>): Prisma__OrderTagClient<$Result.GetResult<Prisma.$OrderTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderTagFindUniqueOrThrowArgs} args - Arguments to find a OrderTag
     * @example
     * // Get one OrderTag
     * const orderTag = await prisma.orderTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderTagFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderTagClient<$Result.GetResult<Prisma.$OrderTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTagFindFirstArgs} args - Arguments to find a OrderTag
     * @example
     * // Get one OrderTag
     * const orderTag = await prisma.orderTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderTagFindFirstArgs>(args?: SelectSubset<T, OrderTagFindFirstArgs<ExtArgs>>): Prisma__OrderTagClient<$Result.GetResult<Prisma.$OrderTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTagFindFirstOrThrowArgs} args - Arguments to find a OrderTag
     * @example
     * // Get one OrderTag
     * const orderTag = await prisma.orderTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderTagFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderTagClient<$Result.GetResult<Prisma.$OrderTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderTags
     * const orderTags = await prisma.orderTag.findMany()
     * 
     * // Get first 10 OrderTags
     * const orderTags = await prisma.orderTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderTagWithIdOnly = await prisma.orderTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderTagFindManyArgs>(args?: SelectSubset<T, OrderTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderTag.
     * @param {OrderTagCreateArgs} args - Arguments to create a OrderTag.
     * @example
     * // Create one OrderTag
     * const OrderTag = await prisma.orderTag.create({
     *   data: {
     *     // ... data to create a OrderTag
     *   }
     * })
     * 
     */
    create<T extends OrderTagCreateArgs>(args: SelectSubset<T, OrderTagCreateArgs<ExtArgs>>): Prisma__OrderTagClient<$Result.GetResult<Prisma.$OrderTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderTags.
     * @param {OrderTagCreateManyArgs} args - Arguments to create many OrderTags.
     * @example
     * // Create many OrderTags
     * const orderTag = await prisma.orderTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderTagCreateManyArgs>(args?: SelectSubset<T, OrderTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderTags and returns the data saved in the database.
     * @param {OrderTagCreateManyAndReturnArgs} args - Arguments to create many OrderTags.
     * @example
     * // Create many OrderTags
     * const orderTag = await prisma.orderTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderTags and only return the `id`
     * const orderTagWithIdOnly = await prisma.orderTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderTagCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderTag.
     * @param {OrderTagDeleteArgs} args - Arguments to delete one OrderTag.
     * @example
     * // Delete one OrderTag
     * const OrderTag = await prisma.orderTag.delete({
     *   where: {
     *     // ... filter to delete one OrderTag
     *   }
     * })
     * 
     */
    delete<T extends OrderTagDeleteArgs>(args: SelectSubset<T, OrderTagDeleteArgs<ExtArgs>>): Prisma__OrderTagClient<$Result.GetResult<Prisma.$OrderTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderTag.
     * @param {OrderTagUpdateArgs} args - Arguments to update one OrderTag.
     * @example
     * // Update one OrderTag
     * const orderTag = await prisma.orderTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderTagUpdateArgs>(args: SelectSubset<T, OrderTagUpdateArgs<ExtArgs>>): Prisma__OrderTagClient<$Result.GetResult<Prisma.$OrderTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderTags.
     * @param {OrderTagDeleteManyArgs} args - Arguments to filter OrderTags to delete.
     * @example
     * // Delete a few OrderTags
     * const { count } = await prisma.orderTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderTagDeleteManyArgs>(args?: SelectSubset<T, OrderTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderTags
     * const orderTag = await prisma.orderTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderTagUpdateManyArgs>(args: SelectSubset<T, OrderTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderTags and returns the data updated in the database.
     * @param {OrderTagUpdateManyAndReturnArgs} args - Arguments to update many OrderTags.
     * @example
     * // Update many OrderTags
     * const orderTag = await prisma.orderTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderTags and only return the `id`
     * const orderTagWithIdOnly = await prisma.orderTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderTagUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderTag.
     * @param {OrderTagUpsertArgs} args - Arguments to update or create a OrderTag.
     * @example
     * // Update or create a OrderTag
     * const orderTag = await prisma.orderTag.upsert({
     *   create: {
     *     // ... data to create a OrderTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderTag we want to update
     *   }
     * })
     */
    upsert<T extends OrderTagUpsertArgs>(args: SelectSubset<T, OrderTagUpsertArgs<ExtArgs>>): Prisma__OrderTagClient<$Result.GetResult<Prisma.$OrderTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTagCountArgs} args - Arguments to filter OrderTags to count.
     * @example
     * // Count the number of OrderTags
     * const count = await prisma.orderTag.count({
     *   where: {
     *     // ... the filter for the OrderTags we want to count
     *   }
     * })
    **/
    count<T extends OrderTagCountArgs>(
      args?: Subset<T, OrderTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderTagAggregateArgs>(args: Subset<T, OrderTagAggregateArgs>): Prisma.PrismaPromise<GetOrderTagAggregateType<T>>

    /**
     * Group by OrderTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderTagGroupByArgs['orderBy'] }
        : { orderBy?: OrderTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderTag model
   */
  readonly fields: OrderTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends OrderTag$ordersArgs<ExtArgs> = {}>(args?: Subset<T, OrderTag$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderTag model
   */
  interface OrderTagFieldRefs {
    readonly id: FieldRef<"OrderTag", 'String'>
    readonly name: FieldRef<"OrderTag", 'String'>
    readonly isPublic: FieldRef<"OrderTag", 'Boolean'>
    readonly price: FieldRef<"OrderTag", 'Int'>
    readonly userId: FieldRef<"OrderTag", 'String'>
    readonly createdAt: FieldRef<"OrderTag", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderTag findUnique
   */
  export type OrderTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTag
     */
    select?: OrderTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderTag
     */
    omit?: OrderTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderTagInclude<ExtArgs> | null
    /**
     * Filter, which OrderTag to fetch.
     */
    where: OrderTagWhereUniqueInput
  }

  /**
   * OrderTag findUniqueOrThrow
   */
  export type OrderTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTag
     */
    select?: OrderTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderTag
     */
    omit?: OrderTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderTagInclude<ExtArgs> | null
    /**
     * Filter, which OrderTag to fetch.
     */
    where: OrderTagWhereUniqueInput
  }

  /**
   * OrderTag findFirst
   */
  export type OrderTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTag
     */
    select?: OrderTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderTag
     */
    omit?: OrderTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderTagInclude<ExtArgs> | null
    /**
     * Filter, which OrderTag to fetch.
     */
    where?: OrderTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderTags to fetch.
     */
    orderBy?: OrderTagOrderByWithRelationInput | OrderTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderTags.
     */
    cursor?: OrderTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderTags.
     */
    distinct?: OrderTagScalarFieldEnum | OrderTagScalarFieldEnum[]
  }

  /**
   * OrderTag findFirstOrThrow
   */
  export type OrderTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTag
     */
    select?: OrderTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderTag
     */
    omit?: OrderTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderTagInclude<ExtArgs> | null
    /**
     * Filter, which OrderTag to fetch.
     */
    where?: OrderTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderTags to fetch.
     */
    orderBy?: OrderTagOrderByWithRelationInput | OrderTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderTags.
     */
    cursor?: OrderTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderTags.
     */
    distinct?: OrderTagScalarFieldEnum | OrderTagScalarFieldEnum[]
  }

  /**
   * OrderTag findMany
   */
  export type OrderTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTag
     */
    select?: OrderTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderTag
     */
    omit?: OrderTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderTagInclude<ExtArgs> | null
    /**
     * Filter, which OrderTags to fetch.
     */
    where?: OrderTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderTags to fetch.
     */
    orderBy?: OrderTagOrderByWithRelationInput | OrderTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderTags.
     */
    cursor?: OrderTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderTags.
     */
    skip?: number
    distinct?: OrderTagScalarFieldEnum | OrderTagScalarFieldEnum[]
  }

  /**
   * OrderTag create
   */
  export type OrderTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTag
     */
    select?: OrderTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderTag
     */
    omit?: OrderTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderTagInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderTag.
     */
    data: XOR<OrderTagCreateInput, OrderTagUncheckedCreateInput>
  }

  /**
   * OrderTag createMany
   */
  export type OrderTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderTags.
     */
    data: OrderTagCreateManyInput | OrderTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderTag createManyAndReturn
   */
  export type OrderTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTag
     */
    select?: OrderTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderTag
     */
    omit?: OrderTagOmit<ExtArgs> | null
    /**
     * The data used to create many OrderTags.
     */
    data: OrderTagCreateManyInput | OrderTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderTag update
   */
  export type OrderTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTag
     */
    select?: OrderTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderTag
     */
    omit?: OrderTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderTagInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderTag.
     */
    data: XOR<OrderTagUpdateInput, OrderTagUncheckedUpdateInput>
    /**
     * Choose, which OrderTag to update.
     */
    where: OrderTagWhereUniqueInput
  }

  /**
   * OrderTag updateMany
   */
  export type OrderTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderTags.
     */
    data: XOR<OrderTagUpdateManyMutationInput, OrderTagUncheckedUpdateManyInput>
    /**
     * Filter which OrderTags to update
     */
    where?: OrderTagWhereInput
    /**
     * Limit how many OrderTags to update.
     */
    limit?: number
  }

  /**
   * OrderTag updateManyAndReturn
   */
  export type OrderTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTag
     */
    select?: OrderTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderTag
     */
    omit?: OrderTagOmit<ExtArgs> | null
    /**
     * The data used to update OrderTags.
     */
    data: XOR<OrderTagUpdateManyMutationInput, OrderTagUncheckedUpdateManyInput>
    /**
     * Filter which OrderTags to update
     */
    where?: OrderTagWhereInput
    /**
     * Limit how many OrderTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderTag upsert
   */
  export type OrderTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTag
     */
    select?: OrderTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderTag
     */
    omit?: OrderTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderTagInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderTag to update in case it exists.
     */
    where: OrderTagWhereUniqueInput
    /**
     * In case the OrderTag found by the `where` argument doesn't exist, create a new OrderTag with this data.
     */
    create: XOR<OrderTagCreateInput, OrderTagUncheckedCreateInput>
    /**
     * In case the OrderTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderTagUpdateInput, OrderTagUncheckedUpdateInput>
  }

  /**
   * OrderTag delete
   */
  export type OrderTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTag
     */
    select?: OrderTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderTag
     */
    omit?: OrderTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderTagInclude<ExtArgs> | null
    /**
     * Filter which OrderTag to delete.
     */
    where: OrderTagWhereUniqueInput
  }

  /**
   * OrderTag deleteMany
   */
  export type OrderTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderTags to delete
     */
    where?: OrderTagWhereInput
    /**
     * Limit how many OrderTags to delete.
     */
    limit?: number
  }

  /**
   * OrderTag.orders
   */
  export type OrderTag$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * OrderTag without action
   */
  export type OrderTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTag
     */
    select?: OrderTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderTag
     */
    omit?: OrderTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderTagInclude<ExtArgs> | null
  }


  /**
   * Model Wrap
   */

  export type AggregateWrap = {
    _count: WrapCountAggregateOutputType | null
    _avg: WrapAvgAggregateOutputType | null
    _sum: WrapSumAggregateOutputType | null
    _min: WrapMinAggregateOutputType | null
    _max: WrapMaxAggregateOutputType | null
  }

  export type WrapAvgAggregateOutputType = {
    price: number | null
  }

  export type WrapSumAggregateOutputType = {
    price: number | null
  }

  export type WrapMinAggregateOutputType = {
    id: string | null
    name: string | null
    isPremium: boolean | null
    price: number | null
    imageUrl: string | null
  }

  export type WrapMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isPremium: boolean | null
    price: number | null
    imageUrl: string | null
  }

  export type WrapCountAggregateOutputType = {
    id: number
    name: number
    isPremium: number
    price: number
    imageUrl: number
    _all: number
  }


  export type WrapAvgAggregateInputType = {
    price?: true
  }

  export type WrapSumAggregateInputType = {
    price?: true
  }

  export type WrapMinAggregateInputType = {
    id?: true
    name?: true
    isPremium?: true
    price?: true
    imageUrl?: true
  }

  export type WrapMaxAggregateInputType = {
    id?: true
    name?: true
    isPremium?: true
    price?: true
    imageUrl?: true
  }

  export type WrapCountAggregateInputType = {
    id?: true
    name?: true
    isPremium?: true
    price?: true
    imageUrl?: true
    _all?: true
  }

  export type WrapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wrap to aggregate.
     */
    where?: WrapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wraps to fetch.
     */
    orderBy?: WrapOrderByWithRelationInput | WrapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WrapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wraps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wraps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wraps
    **/
    _count?: true | WrapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WrapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WrapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WrapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WrapMaxAggregateInputType
  }

  export type GetWrapAggregateType<T extends WrapAggregateArgs> = {
        [P in keyof T & keyof AggregateWrap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWrap[P]>
      : GetScalarType<T[P], AggregateWrap[P]>
  }




  export type WrapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WrapWhereInput
    orderBy?: WrapOrderByWithAggregationInput | WrapOrderByWithAggregationInput[]
    by: WrapScalarFieldEnum[] | WrapScalarFieldEnum
    having?: WrapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WrapCountAggregateInputType | true
    _avg?: WrapAvgAggregateInputType
    _sum?: WrapSumAggregateInputType
    _min?: WrapMinAggregateInputType
    _max?: WrapMaxAggregateInputType
  }

  export type WrapGroupByOutputType = {
    id: string
    name: string
    isPremium: boolean
    price: number
    imageUrl: string
    _count: WrapCountAggregateOutputType | null
    _avg: WrapAvgAggregateOutputType | null
    _sum: WrapSumAggregateOutputType | null
    _min: WrapMinAggregateOutputType | null
    _max: WrapMaxAggregateOutputType | null
  }

  type GetWrapGroupByPayload<T extends WrapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WrapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WrapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WrapGroupByOutputType[P]>
            : GetScalarType<T[P], WrapGroupByOutputType[P]>
        }
      >
    >


  export type WrapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isPremium?: boolean
    price?: boolean
    imageUrl?: boolean
    orders?: boolean | Wrap$ordersArgs<ExtArgs>
    _count?: boolean | WrapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wrap"]>

  export type WrapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isPremium?: boolean
    price?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["wrap"]>

  export type WrapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isPremium?: boolean
    price?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["wrap"]>

  export type WrapSelectScalar = {
    id?: boolean
    name?: boolean
    isPremium?: boolean
    price?: boolean
    imageUrl?: boolean
  }

  export type WrapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isPremium" | "price" | "imageUrl", ExtArgs["result"]["wrap"]>
  export type WrapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Wrap$ordersArgs<ExtArgs>
    _count?: boolean | WrapCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WrapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WrapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WrapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wrap"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isPremium: boolean
      price: number
      imageUrl: string
    }, ExtArgs["result"]["wrap"]>
    composites: {}
  }

  type WrapGetPayload<S extends boolean | null | undefined | WrapDefaultArgs> = $Result.GetResult<Prisma.$WrapPayload, S>

  type WrapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WrapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WrapCountAggregateInputType | true
    }

  export interface WrapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wrap'], meta: { name: 'Wrap' } }
    /**
     * Find zero or one Wrap that matches the filter.
     * @param {WrapFindUniqueArgs} args - Arguments to find a Wrap
     * @example
     * // Get one Wrap
     * const wrap = await prisma.wrap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WrapFindUniqueArgs>(args: SelectSubset<T, WrapFindUniqueArgs<ExtArgs>>): Prisma__WrapClient<$Result.GetResult<Prisma.$WrapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wrap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WrapFindUniqueOrThrowArgs} args - Arguments to find a Wrap
     * @example
     * // Get one Wrap
     * const wrap = await prisma.wrap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WrapFindUniqueOrThrowArgs>(args: SelectSubset<T, WrapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WrapClient<$Result.GetResult<Prisma.$WrapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wrap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrapFindFirstArgs} args - Arguments to find a Wrap
     * @example
     * // Get one Wrap
     * const wrap = await prisma.wrap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WrapFindFirstArgs>(args?: SelectSubset<T, WrapFindFirstArgs<ExtArgs>>): Prisma__WrapClient<$Result.GetResult<Prisma.$WrapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wrap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrapFindFirstOrThrowArgs} args - Arguments to find a Wrap
     * @example
     * // Get one Wrap
     * const wrap = await prisma.wrap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WrapFindFirstOrThrowArgs>(args?: SelectSubset<T, WrapFindFirstOrThrowArgs<ExtArgs>>): Prisma__WrapClient<$Result.GetResult<Prisma.$WrapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wraps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wraps
     * const wraps = await prisma.wrap.findMany()
     * 
     * // Get first 10 Wraps
     * const wraps = await prisma.wrap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wrapWithIdOnly = await prisma.wrap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WrapFindManyArgs>(args?: SelectSubset<T, WrapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wrap.
     * @param {WrapCreateArgs} args - Arguments to create a Wrap.
     * @example
     * // Create one Wrap
     * const Wrap = await prisma.wrap.create({
     *   data: {
     *     // ... data to create a Wrap
     *   }
     * })
     * 
     */
    create<T extends WrapCreateArgs>(args: SelectSubset<T, WrapCreateArgs<ExtArgs>>): Prisma__WrapClient<$Result.GetResult<Prisma.$WrapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wraps.
     * @param {WrapCreateManyArgs} args - Arguments to create many Wraps.
     * @example
     * // Create many Wraps
     * const wrap = await prisma.wrap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WrapCreateManyArgs>(args?: SelectSubset<T, WrapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wraps and returns the data saved in the database.
     * @param {WrapCreateManyAndReturnArgs} args - Arguments to create many Wraps.
     * @example
     * // Create many Wraps
     * const wrap = await prisma.wrap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wraps and only return the `id`
     * const wrapWithIdOnly = await prisma.wrap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WrapCreateManyAndReturnArgs>(args?: SelectSubset<T, WrapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wrap.
     * @param {WrapDeleteArgs} args - Arguments to delete one Wrap.
     * @example
     * // Delete one Wrap
     * const Wrap = await prisma.wrap.delete({
     *   where: {
     *     // ... filter to delete one Wrap
     *   }
     * })
     * 
     */
    delete<T extends WrapDeleteArgs>(args: SelectSubset<T, WrapDeleteArgs<ExtArgs>>): Prisma__WrapClient<$Result.GetResult<Prisma.$WrapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wrap.
     * @param {WrapUpdateArgs} args - Arguments to update one Wrap.
     * @example
     * // Update one Wrap
     * const wrap = await prisma.wrap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WrapUpdateArgs>(args: SelectSubset<T, WrapUpdateArgs<ExtArgs>>): Prisma__WrapClient<$Result.GetResult<Prisma.$WrapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wraps.
     * @param {WrapDeleteManyArgs} args - Arguments to filter Wraps to delete.
     * @example
     * // Delete a few Wraps
     * const { count } = await prisma.wrap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WrapDeleteManyArgs>(args?: SelectSubset<T, WrapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wraps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wraps
     * const wrap = await prisma.wrap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WrapUpdateManyArgs>(args: SelectSubset<T, WrapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wraps and returns the data updated in the database.
     * @param {WrapUpdateManyAndReturnArgs} args - Arguments to update many Wraps.
     * @example
     * // Update many Wraps
     * const wrap = await prisma.wrap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wraps and only return the `id`
     * const wrapWithIdOnly = await prisma.wrap.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WrapUpdateManyAndReturnArgs>(args: SelectSubset<T, WrapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wrap.
     * @param {WrapUpsertArgs} args - Arguments to update or create a Wrap.
     * @example
     * // Update or create a Wrap
     * const wrap = await prisma.wrap.upsert({
     *   create: {
     *     // ... data to create a Wrap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wrap we want to update
     *   }
     * })
     */
    upsert<T extends WrapUpsertArgs>(args: SelectSubset<T, WrapUpsertArgs<ExtArgs>>): Prisma__WrapClient<$Result.GetResult<Prisma.$WrapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wraps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrapCountArgs} args - Arguments to filter Wraps to count.
     * @example
     * // Count the number of Wraps
     * const count = await prisma.wrap.count({
     *   where: {
     *     // ... the filter for the Wraps we want to count
     *   }
     * })
    **/
    count<T extends WrapCountArgs>(
      args?: Subset<T, WrapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WrapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wrap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WrapAggregateArgs>(args: Subset<T, WrapAggregateArgs>): Prisma.PrismaPromise<GetWrapAggregateType<T>>

    /**
     * Group by Wrap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WrapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WrapGroupByArgs['orderBy'] }
        : { orderBy?: WrapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WrapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWrapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wrap model
   */
  readonly fields: WrapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wrap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WrapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Wrap$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Wrap$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wrap model
   */
  interface WrapFieldRefs {
    readonly id: FieldRef<"Wrap", 'String'>
    readonly name: FieldRef<"Wrap", 'String'>
    readonly isPremium: FieldRef<"Wrap", 'Boolean'>
    readonly price: FieldRef<"Wrap", 'Int'>
    readonly imageUrl: FieldRef<"Wrap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Wrap findUnique
   */
  export type WrapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wrap
     */
    select?: WrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wrap
     */
    omit?: WrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrapInclude<ExtArgs> | null
    /**
     * Filter, which Wrap to fetch.
     */
    where: WrapWhereUniqueInput
  }

  /**
   * Wrap findUniqueOrThrow
   */
  export type WrapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wrap
     */
    select?: WrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wrap
     */
    omit?: WrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrapInclude<ExtArgs> | null
    /**
     * Filter, which Wrap to fetch.
     */
    where: WrapWhereUniqueInput
  }

  /**
   * Wrap findFirst
   */
  export type WrapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wrap
     */
    select?: WrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wrap
     */
    omit?: WrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrapInclude<ExtArgs> | null
    /**
     * Filter, which Wrap to fetch.
     */
    where?: WrapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wraps to fetch.
     */
    orderBy?: WrapOrderByWithRelationInput | WrapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wraps.
     */
    cursor?: WrapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wraps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wraps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wraps.
     */
    distinct?: WrapScalarFieldEnum | WrapScalarFieldEnum[]
  }

  /**
   * Wrap findFirstOrThrow
   */
  export type WrapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wrap
     */
    select?: WrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wrap
     */
    omit?: WrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrapInclude<ExtArgs> | null
    /**
     * Filter, which Wrap to fetch.
     */
    where?: WrapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wraps to fetch.
     */
    orderBy?: WrapOrderByWithRelationInput | WrapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wraps.
     */
    cursor?: WrapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wraps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wraps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wraps.
     */
    distinct?: WrapScalarFieldEnum | WrapScalarFieldEnum[]
  }

  /**
   * Wrap findMany
   */
  export type WrapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wrap
     */
    select?: WrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wrap
     */
    omit?: WrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrapInclude<ExtArgs> | null
    /**
     * Filter, which Wraps to fetch.
     */
    where?: WrapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wraps to fetch.
     */
    orderBy?: WrapOrderByWithRelationInput | WrapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wraps.
     */
    cursor?: WrapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wraps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wraps.
     */
    skip?: number
    distinct?: WrapScalarFieldEnum | WrapScalarFieldEnum[]
  }

  /**
   * Wrap create
   */
  export type WrapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wrap
     */
    select?: WrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wrap
     */
    omit?: WrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrapInclude<ExtArgs> | null
    /**
     * The data needed to create a Wrap.
     */
    data: XOR<WrapCreateInput, WrapUncheckedCreateInput>
  }

  /**
   * Wrap createMany
   */
  export type WrapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wraps.
     */
    data: WrapCreateManyInput | WrapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wrap createManyAndReturn
   */
  export type WrapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wrap
     */
    select?: WrapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wrap
     */
    omit?: WrapOmit<ExtArgs> | null
    /**
     * The data used to create many Wraps.
     */
    data: WrapCreateManyInput | WrapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wrap update
   */
  export type WrapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wrap
     */
    select?: WrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wrap
     */
    omit?: WrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrapInclude<ExtArgs> | null
    /**
     * The data needed to update a Wrap.
     */
    data: XOR<WrapUpdateInput, WrapUncheckedUpdateInput>
    /**
     * Choose, which Wrap to update.
     */
    where: WrapWhereUniqueInput
  }

  /**
   * Wrap updateMany
   */
  export type WrapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wraps.
     */
    data: XOR<WrapUpdateManyMutationInput, WrapUncheckedUpdateManyInput>
    /**
     * Filter which Wraps to update
     */
    where?: WrapWhereInput
    /**
     * Limit how many Wraps to update.
     */
    limit?: number
  }

  /**
   * Wrap updateManyAndReturn
   */
  export type WrapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wrap
     */
    select?: WrapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wrap
     */
    omit?: WrapOmit<ExtArgs> | null
    /**
     * The data used to update Wraps.
     */
    data: XOR<WrapUpdateManyMutationInput, WrapUncheckedUpdateManyInput>
    /**
     * Filter which Wraps to update
     */
    where?: WrapWhereInput
    /**
     * Limit how many Wraps to update.
     */
    limit?: number
  }

  /**
   * Wrap upsert
   */
  export type WrapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wrap
     */
    select?: WrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wrap
     */
    omit?: WrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrapInclude<ExtArgs> | null
    /**
     * The filter to search for the Wrap to update in case it exists.
     */
    where: WrapWhereUniqueInput
    /**
     * In case the Wrap found by the `where` argument doesn't exist, create a new Wrap with this data.
     */
    create: XOR<WrapCreateInput, WrapUncheckedCreateInput>
    /**
     * In case the Wrap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WrapUpdateInput, WrapUncheckedUpdateInput>
  }

  /**
   * Wrap delete
   */
  export type WrapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wrap
     */
    select?: WrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wrap
     */
    omit?: WrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrapInclude<ExtArgs> | null
    /**
     * Filter which Wrap to delete.
     */
    where: WrapWhereUniqueInput
  }

  /**
   * Wrap deleteMany
   */
  export type WrapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wraps to delete
     */
    where?: WrapWhereInput
    /**
     * Limit how many Wraps to delete.
     */
    limit?: number
  }

  /**
   * Wrap.orders
   */
  export type Wrap$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Wrap without action
   */
  export type WrapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wrap
     */
    select?: WrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wrap
     */
    omit?: WrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrapInclude<ExtArgs> | null
  }


  /**
   * Model PreferencePrice
   */

  export type AggregatePreferencePrice = {
    _count: PreferencePriceCountAggregateOutputType | null
    _avg: PreferencePriceAvgAggregateOutputType | null
    _sum: PreferencePriceSumAggregateOutputType | null
    _min: PreferencePriceMinAggregateOutputType | null
    _max: PreferencePriceMaxAggregateOutputType | null
  }

  export type PreferencePriceAvgAggregateOutputType = {
    price: number | null
  }

  export type PreferencePriceSumAggregateOutputType = {
    price: number | null
  }

  export type PreferencePriceMinAggregateOutputType = {
    id: string | null
    preference: $Enums.Preference | null
    price: number | null
  }

  export type PreferencePriceMaxAggregateOutputType = {
    id: string | null
    preference: $Enums.Preference | null
    price: number | null
  }

  export type PreferencePriceCountAggregateOutputType = {
    id: number
    preference: number
    price: number
    _all: number
  }


  export type PreferencePriceAvgAggregateInputType = {
    price?: true
  }

  export type PreferencePriceSumAggregateInputType = {
    price?: true
  }

  export type PreferencePriceMinAggregateInputType = {
    id?: true
    preference?: true
    price?: true
  }

  export type PreferencePriceMaxAggregateInputType = {
    id?: true
    preference?: true
    price?: true
  }

  export type PreferencePriceCountAggregateInputType = {
    id?: true
    preference?: true
    price?: true
    _all?: true
  }

  export type PreferencePriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreferencePrice to aggregate.
     */
    where?: PreferencePriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferencePrices to fetch.
     */
    orderBy?: PreferencePriceOrderByWithRelationInput | PreferencePriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreferencePriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferencePrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferencePrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PreferencePrices
    **/
    _count?: true | PreferencePriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreferencePriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreferencePriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferencePriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferencePriceMaxAggregateInputType
  }

  export type GetPreferencePriceAggregateType<T extends PreferencePriceAggregateArgs> = {
        [P in keyof T & keyof AggregatePreferencePrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreferencePrice[P]>
      : GetScalarType<T[P], AggregatePreferencePrice[P]>
  }




  export type PreferencePriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferencePriceWhereInput
    orderBy?: PreferencePriceOrderByWithAggregationInput | PreferencePriceOrderByWithAggregationInput[]
    by: PreferencePriceScalarFieldEnum[] | PreferencePriceScalarFieldEnum
    having?: PreferencePriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferencePriceCountAggregateInputType | true
    _avg?: PreferencePriceAvgAggregateInputType
    _sum?: PreferencePriceSumAggregateInputType
    _min?: PreferencePriceMinAggregateInputType
    _max?: PreferencePriceMaxAggregateInputType
  }

  export type PreferencePriceGroupByOutputType = {
    id: string
    preference: $Enums.Preference
    price: number
    _count: PreferencePriceCountAggregateOutputType | null
    _avg: PreferencePriceAvgAggregateOutputType | null
    _sum: PreferencePriceSumAggregateOutputType | null
    _min: PreferencePriceMinAggregateOutputType | null
    _max: PreferencePriceMaxAggregateOutputType | null
  }

  type GetPreferencePriceGroupByPayload<T extends PreferencePriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferencePriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferencePriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferencePriceGroupByOutputType[P]>
            : GetScalarType<T[P], PreferencePriceGroupByOutputType[P]>
        }
      >
    >


  export type PreferencePriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    preference?: boolean
    price?: boolean
    orders?: boolean | PreferencePrice$ordersArgs<ExtArgs>
    _count?: boolean | PreferencePriceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferencePrice"]>

  export type PreferencePriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    preference?: boolean
    price?: boolean
  }, ExtArgs["result"]["preferencePrice"]>

  export type PreferencePriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    preference?: boolean
    price?: boolean
  }, ExtArgs["result"]["preferencePrice"]>

  export type PreferencePriceSelectScalar = {
    id?: boolean
    preference?: boolean
    price?: boolean
  }

  export type PreferencePriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "preference" | "price", ExtArgs["result"]["preferencePrice"]>
  export type PreferencePriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | PreferencePrice$ordersArgs<ExtArgs>
    _count?: boolean | PreferencePriceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PreferencePriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PreferencePriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PreferencePricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PreferencePrice"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      preference: $Enums.Preference
      price: number
    }, ExtArgs["result"]["preferencePrice"]>
    composites: {}
  }

  type PreferencePriceGetPayload<S extends boolean | null | undefined | PreferencePriceDefaultArgs> = $Result.GetResult<Prisma.$PreferencePricePayload, S>

  type PreferencePriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreferencePriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferencePriceCountAggregateInputType | true
    }

  export interface PreferencePriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PreferencePrice'], meta: { name: 'PreferencePrice' } }
    /**
     * Find zero or one PreferencePrice that matches the filter.
     * @param {PreferencePriceFindUniqueArgs} args - Arguments to find a PreferencePrice
     * @example
     * // Get one PreferencePrice
     * const preferencePrice = await prisma.preferencePrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferencePriceFindUniqueArgs>(args: SelectSubset<T, PreferencePriceFindUniqueArgs<ExtArgs>>): Prisma__PreferencePriceClient<$Result.GetResult<Prisma.$PreferencePricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PreferencePrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferencePriceFindUniqueOrThrowArgs} args - Arguments to find a PreferencePrice
     * @example
     * // Get one PreferencePrice
     * const preferencePrice = await prisma.preferencePrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferencePriceFindUniqueOrThrowArgs>(args: SelectSubset<T, PreferencePriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreferencePriceClient<$Result.GetResult<Prisma.$PreferencePricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreferencePrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencePriceFindFirstArgs} args - Arguments to find a PreferencePrice
     * @example
     * // Get one PreferencePrice
     * const preferencePrice = await prisma.preferencePrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferencePriceFindFirstArgs>(args?: SelectSubset<T, PreferencePriceFindFirstArgs<ExtArgs>>): Prisma__PreferencePriceClient<$Result.GetResult<Prisma.$PreferencePricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreferencePrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencePriceFindFirstOrThrowArgs} args - Arguments to find a PreferencePrice
     * @example
     * // Get one PreferencePrice
     * const preferencePrice = await prisma.preferencePrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferencePriceFindFirstOrThrowArgs>(args?: SelectSubset<T, PreferencePriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreferencePriceClient<$Result.GetResult<Prisma.$PreferencePricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PreferencePrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencePriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PreferencePrices
     * const preferencePrices = await prisma.preferencePrice.findMany()
     * 
     * // Get first 10 PreferencePrices
     * const preferencePrices = await prisma.preferencePrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferencePriceWithIdOnly = await prisma.preferencePrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreferencePriceFindManyArgs>(args?: SelectSubset<T, PreferencePriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencePricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PreferencePrice.
     * @param {PreferencePriceCreateArgs} args - Arguments to create a PreferencePrice.
     * @example
     * // Create one PreferencePrice
     * const PreferencePrice = await prisma.preferencePrice.create({
     *   data: {
     *     // ... data to create a PreferencePrice
     *   }
     * })
     * 
     */
    create<T extends PreferencePriceCreateArgs>(args: SelectSubset<T, PreferencePriceCreateArgs<ExtArgs>>): Prisma__PreferencePriceClient<$Result.GetResult<Prisma.$PreferencePricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PreferencePrices.
     * @param {PreferencePriceCreateManyArgs} args - Arguments to create many PreferencePrices.
     * @example
     * // Create many PreferencePrices
     * const preferencePrice = await prisma.preferencePrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreferencePriceCreateManyArgs>(args?: SelectSubset<T, PreferencePriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PreferencePrices and returns the data saved in the database.
     * @param {PreferencePriceCreateManyAndReturnArgs} args - Arguments to create many PreferencePrices.
     * @example
     * // Create many PreferencePrices
     * const preferencePrice = await prisma.preferencePrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PreferencePrices and only return the `id`
     * const preferencePriceWithIdOnly = await prisma.preferencePrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreferencePriceCreateManyAndReturnArgs>(args?: SelectSubset<T, PreferencePriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencePricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PreferencePrice.
     * @param {PreferencePriceDeleteArgs} args - Arguments to delete one PreferencePrice.
     * @example
     * // Delete one PreferencePrice
     * const PreferencePrice = await prisma.preferencePrice.delete({
     *   where: {
     *     // ... filter to delete one PreferencePrice
     *   }
     * })
     * 
     */
    delete<T extends PreferencePriceDeleteArgs>(args: SelectSubset<T, PreferencePriceDeleteArgs<ExtArgs>>): Prisma__PreferencePriceClient<$Result.GetResult<Prisma.$PreferencePricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PreferencePrice.
     * @param {PreferencePriceUpdateArgs} args - Arguments to update one PreferencePrice.
     * @example
     * // Update one PreferencePrice
     * const preferencePrice = await prisma.preferencePrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreferencePriceUpdateArgs>(args: SelectSubset<T, PreferencePriceUpdateArgs<ExtArgs>>): Prisma__PreferencePriceClient<$Result.GetResult<Prisma.$PreferencePricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PreferencePrices.
     * @param {PreferencePriceDeleteManyArgs} args - Arguments to filter PreferencePrices to delete.
     * @example
     * // Delete a few PreferencePrices
     * const { count } = await prisma.preferencePrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreferencePriceDeleteManyArgs>(args?: SelectSubset<T, PreferencePriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreferencePrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencePriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PreferencePrices
     * const preferencePrice = await prisma.preferencePrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreferencePriceUpdateManyArgs>(args: SelectSubset<T, PreferencePriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreferencePrices and returns the data updated in the database.
     * @param {PreferencePriceUpdateManyAndReturnArgs} args - Arguments to update many PreferencePrices.
     * @example
     * // Update many PreferencePrices
     * const preferencePrice = await prisma.preferencePrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PreferencePrices and only return the `id`
     * const preferencePriceWithIdOnly = await prisma.preferencePrice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PreferencePriceUpdateManyAndReturnArgs>(args: SelectSubset<T, PreferencePriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencePricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PreferencePrice.
     * @param {PreferencePriceUpsertArgs} args - Arguments to update or create a PreferencePrice.
     * @example
     * // Update or create a PreferencePrice
     * const preferencePrice = await prisma.preferencePrice.upsert({
     *   create: {
     *     // ... data to create a PreferencePrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PreferencePrice we want to update
     *   }
     * })
     */
    upsert<T extends PreferencePriceUpsertArgs>(args: SelectSubset<T, PreferencePriceUpsertArgs<ExtArgs>>): Prisma__PreferencePriceClient<$Result.GetResult<Prisma.$PreferencePricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PreferencePrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencePriceCountArgs} args - Arguments to filter PreferencePrices to count.
     * @example
     * // Count the number of PreferencePrices
     * const count = await prisma.preferencePrice.count({
     *   where: {
     *     // ... the filter for the PreferencePrices we want to count
     *   }
     * })
    **/
    count<T extends PreferencePriceCountArgs>(
      args?: Subset<T, PreferencePriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferencePriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PreferencePrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencePriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreferencePriceAggregateArgs>(args: Subset<T, PreferencePriceAggregateArgs>): Prisma.PrismaPromise<GetPreferencePriceAggregateType<T>>

    /**
     * Group by PreferencePrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencePriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreferencePriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreferencePriceGroupByArgs['orderBy'] }
        : { orderBy?: PreferencePriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreferencePriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferencePriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PreferencePrice model
   */
  readonly fields: PreferencePriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PreferencePrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreferencePriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends PreferencePrice$ordersArgs<ExtArgs> = {}>(args?: Subset<T, PreferencePrice$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PreferencePrice model
   */
  interface PreferencePriceFieldRefs {
    readonly id: FieldRef<"PreferencePrice", 'String'>
    readonly preference: FieldRef<"PreferencePrice", 'Preference'>
    readonly price: FieldRef<"PreferencePrice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PreferencePrice findUnique
   */
  export type PreferencePriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferencePrice
     */
    select?: PreferencePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferencePrice
     */
    omit?: PreferencePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencePriceInclude<ExtArgs> | null
    /**
     * Filter, which PreferencePrice to fetch.
     */
    where: PreferencePriceWhereUniqueInput
  }

  /**
   * PreferencePrice findUniqueOrThrow
   */
  export type PreferencePriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferencePrice
     */
    select?: PreferencePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferencePrice
     */
    omit?: PreferencePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencePriceInclude<ExtArgs> | null
    /**
     * Filter, which PreferencePrice to fetch.
     */
    where: PreferencePriceWhereUniqueInput
  }

  /**
   * PreferencePrice findFirst
   */
  export type PreferencePriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferencePrice
     */
    select?: PreferencePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferencePrice
     */
    omit?: PreferencePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencePriceInclude<ExtArgs> | null
    /**
     * Filter, which PreferencePrice to fetch.
     */
    where?: PreferencePriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferencePrices to fetch.
     */
    orderBy?: PreferencePriceOrderByWithRelationInput | PreferencePriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreferencePrices.
     */
    cursor?: PreferencePriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferencePrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferencePrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreferencePrices.
     */
    distinct?: PreferencePriceScalarFieldEnum | PreferencePriceScalarFieldEnum[]
  }

  /**
   * PreferencePrice findFirstOrThrow
   */
  export type PreferencePriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferencePrice
     */
    select?: PreferencePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferencePrice
     */
    omit?: PreferencePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencePriceInclude<ExtArgs> | null
    /**
     * Filter, which PreferencePrice to fetch.
     */
    where?: PreferencePriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferencePrices to fetch.
     */
    orderBy?: PreferencePriceOrderByWithRelationInput | PreferencePriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreferencePrices.
     */
    cursor?: PreferencePriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferencePrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferencePrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreferencePrices.
     */
    distinct?: PreferencePriceScalarFieldEnum | PreferencePriceScalarFieldEnum[]
  }

  /**
   * PreferencePrice findMany
   */
  export type PreferencePriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferencePrice
     */
    select?: PreferencePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferencePrice
     */
    omit?: PreferencePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencePriceInclude<ExtArgs> | null
    /**
     * Filter, which PreferencePrices to fetch.
     */
    where?: PreferencePriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferencePrices to fetch.
     */
    orderBy?: PreferencePriceOrderByWithRelationInput | PreferencePriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PreferencePrices.
     */
    cursor?: PreferencePriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferencePrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferencePrices.
     */
    skip?: number
    distinct?: PreferencePriceScalarFieldEnum | PreferencePriceScalarFieldEnum[]
  }

  /**
   * PreferencePrice create
   */
  export type PreferencePriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferencePrice
     */
    select?: PreferencePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferencePrice
     */
    omit?: PreferencePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencePriceInclude<ExtArgs> | null
    /**
     * The data needed to create a PreferencePrice.
     */
    data: XOR<PreferencePriceCreateInput, PreferencePriceUncheckedCreateInput>
  }

  /**
   * PreferencePrice createMany
   */
  export type PreferencePriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PreferencePrices.
     */
    data: PreferencePriceCreateManyInput | PreferencePriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PreferencePrice createManyAndReturn
   */
  export type PreferencePriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferencePrice
     */
    select?: PreferencePriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreferencePrice
     */
    omit?: PreferencePriceOmit<ExtArgs> | null
    /**
     * The data used to create many PreferencePrices.
     */
    data: PreferencePriceCreateManyInput | PreferencePriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PreferencePrice update
   */
  export type PreferencePriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferencePrice
     */
    select?: PreferencePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferencePrice
     */
    omit?: PreferencePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencePriceInclude<ExtArgs> | null
    /**
     * The data needed to update a PreferencePrice.
     */
    data: XOR<PreferencePriceUpdateInput, PreferencePriceUncheckedUpdateInput>
    /**
     * Choose, which PreferencePrice to update.
     */
    where: PreferencePriceWhereUniqueInput
  }

  /**
   * PreferencePrice updateMany
   */
  export type PreferencePriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PreferencePrices.
     */
    data: XOR<PreferencePriceUpdateManyMutationInput, PreferencePriceUncheckedUpdateManyInput>
    /**
     * Filter which PreferencePrices to update
     */
    where?: PreferencePriceWhereInput
    /**
     * Limit how many PreferencePrices to update.
     */
    limit?: number
  }

  /**
   * PreferencePrice updateManyAndReturn
   */
  export type PreferencePriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferencePrice
     */
    select?: PreferencePriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreferencePrice
     */
    omit?: PreferencePriceOmit<ExtArgs> | null
    /**
     * The data used to update PreferencePrices.
     */
    data: XOR<PreferencePriceUpdateManyMutationInput, PreferencePriceUncheckedUpdateManyInput>
    /**
     * Filter which PreferencePrices to update
     */
    where?: PreferencePriceWhereInput
    /**
     * Limit how many PreferencePrices to update.
     */
    limit?: number
  }

  /**
   * PreferencePrice upsert
   */
  export type PreferencePriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferencePrice
     */
    select?: PreferencePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferencePrice
     */
    omit?: PreferencePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencePriceInclude<ExtArgs> | null
    /**
     * The filter to search for the PreferencePrice to update in case it exists.
     */
    where: PreferencePriceWhereUniqueInput
    /**
     * In case the PreferencePrice found by the `where` argument doesn't exist, create a new PreferencePrice with this data.
     */
    create: XOR<PreferencePriceCreateInput, PreferencePriceUncheckedCreateInput>
    /**
     * In case the PreferencePrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreferencePriceUpdateInput, PreferencePriceUncheckedUpdateInput>
  }

  /**
   * PreferencePrice delete
   */
  export type PreferencePriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferencePrice
     */
    select?: PreferencePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferencePrice
     */
    omit?: PreferencePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencePriceInclude<ExtArgs> | null
    /**
     * Filter which PreferencePrice to delete.
     */
    where: PreferencePriceWhereUniqueInput
  }

  /**
   * PreferencePrice deleteMany
   */
  export type PreferencePriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreferencePrices to delete
     */
    where?: PreferencePriceWhereInput
    /**
     * Limit how many PreferencePrices to delete.
     */
    limit?: number
  }

  /**
   * PreferencePrice.orders
   */
  export type PreferencePrice$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * PreferencePrice without action
   */
  export type PreferencePriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferencePrice
     */
    select?: PreferencePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferencePrice
     */
    omit?: PreferencePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencePriceInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    deliveryCharge: number | null
    totalPrice: number | null
  }

  export type OrderSumAggregateOutputType = {
    deliveryCharge: number | null
    totalPrice: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    deliveryId: string | null
    deliveryCharge: number | null
    status: $Enums.OrderStatus | null
    totalPrice: number | null
    razorpayOrderId: string | null
    paymentStatus: string | null
    orderTagId: string | null
    wrapId: string | null
    preferenceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    deliveryId: string | null
    deliveryCharge: number | null
    status: $Enums.OrderStatus | null
    totalPrice: number | null
    razorpayOrderId: string | null
    paymentStatus: string | null
    orderTagId: string | null
    wrapId: string | null
    preferenceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    deliveryId: number
    deliveryCharge: number
    status: number
    totalPrice: number
    razorpayOrderId: number
    paymentStatus: number
    orderTagId: number
    wrapId: number
    preferenceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    deliveryCharge?: true
    totalPrice?: true
  }

  export type OrderSumAggregateInputType = {
    deliveryCharge?: true
    totalPrice?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    deliveryId?: true
    deliveryCharge?: true
    status?: true
    totalPrice?: true
    razorpayOrderId?: true
    paymentStatus?: true
    orderTagId?: true
    wrapId?: true
    preferenceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    deliveryId?: true
    deliveryCharge?: true
    status?: true
    totalPrice?: true
    razorpayOrderId?: true
    paymentStatus?: true
    orderTagId?: true
    wrapId?: true
    preferenceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    deliveryId?: true
    deliveryCharge?: true
    status?: true
    totalPrice?: true
    razorpayOrderId?: true
    paymentStatus?: true
    orderTagId?: true
    wrapId?: true
    preferenceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    deliveryId: string
    deliveryCharge: number
    status: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId: string | null
    paymentStatus: string | null
    orderTagId: string
    wrapId: string
    preferenceId: string
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deliveryId?: boolean
    deliveryCharge?: boolean
    status?: boolean
    totalPrice?: boolean
    razorpayOrderId?: boolean
    paymentStatus?: boolean
    orderTagId?: boolean
    wrapId?: boolean
    preferenceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    delivery?: boolean | DeliveryInfoDefaultArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    tag?: boolean | OrderTagDefaultArgs<ExtArgs>
    wrap?: boolean | WrapDefaultArgs<ExtArgs>
    preference?: boolean | PreferencePriceDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deliveryId?: boolean
    deliveryCharge?: boolean
    status?: boolean
    totalPrice?: boolean
    razorpayOrderId?: boolean
    paymentStatus?: boolean
    orderTagId?: boolean
    wrapId?: boolean
    preferenceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    delivery?: boolean | DeliveryInfoDefaultArgs<ExtArgs>
    tag?: boolean | OrderTagDefaultArgs<ExtArgs>
    wrap?: boolean | WrapDefaultArgs<ExtArgs>
    preference?: boolean | PreferencePriceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deliveryId?: boolean
    deliveryCharge?: boolean
    status?: boolean
    totalPrice?: boolean
    razorpayOrderId?: boolean
    paymentStatus?: boolean
    orderTagId?: boolean
    wrapId?: boolean
    preferenceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    delivery?: boolean | DeliveryInfoDefaultArgs<ExtArgs>
    tag?: boolean | OrderTagDefaultArgs<ExtArgs>
    wrap?: boolean | WrapDefaultArgs<ExtArgs>
    preference?: boolean | PreferencePriceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    deliveryId?: boolean
    deliveryCharge?: boolean
    status?: boolean
    totalPrice?: boolean
    razorpayOrderId?: boolean
    paymentStatus?: boolean
    orderTagId?: boolean
    wrapId?: boolean
    preferenceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "deliveryId" | "deliveryCharge" | "status" | "totalPrice" | "razorpayOrderId" | "paymentStatus" | "orderTagId" | "wrapId" | "preferenceId" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    delivery?: boolean | DeliveryInfoDefaultArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    tag?: boolean | OrderTagDefaultArgs<ExtArgs>
    wrap?: boolean | WrapDefaultArgs<ExtArgs>
    preference?: boolean | PreferencePriceDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    delivery?: boolean | DeliveryInfoDefaultArgs<ExtArgs>
    tag?: boolean | OrderTagDefaultArgs<ExtArgs>
    wrap?: boolean | WrapDefaultArgs<ExtArgs>
    preference?: boolean | PreferencePriceDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    delivery?: boolean | DeliveryInfoDefaultArgs<ExtArgs>
    tag?: boolean | OrderTagDefaultArgs<ExtArgs>
    wrap?: boolean | WrapDefaultArgs<ExtArgs>
    preference?: boolean | PreferencePriceDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      delivery: Prisma.$DeliveryInfoPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      tag: Prisma.$OrderTagPayload<ExtArgs>
      wrap: Prisma.$WrapPayload<ExtArgs>
      preference: Prisma.$PreferencePricePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      deliveryId: string
      deliveryCharge: number
      status: $Enums.OrderStatus
      totalPrice: number
      razorpayOrderId: string | null
      paymentStatus: string | null
      orderTagId: string
      wrapId: string
      preferenceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    delivery<T extends DeliveryInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryInfoDefaultArgs<ExtArgs>>): Prisma__DeliveryInfoClient<$Result.GetResult<Prisma.$DeliveryInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tag<T extends OrderTagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderTagDefaultArgs<ExtArgs>>): Prisma__OrderTagClient<$Result.GetResult<Prisma.$OrderTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wrap<T extends WrapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WrapDefaultArgs<ExtArgs>>): Prisma__WrapClient<$Result.GetResult<Prisma.$WrapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    preference<T extends PreferencePriceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PreferencePriceDefaultArgs<ExtArgs>>): Prisma__PreferencePriceClient<$Result.GetResult<Prisma.$PreferencePricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly deliveryId: FieldRef<"Order", 'String'>
    readonly deliveryCharge: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly totalPrice: FieldRef<"Order", 'Int'>
    readonly razorpayOrderId: FieldRef<"Order", 'String'>
    readonly paymentStatus: FieldRef<"Order", 'String'>
    readonly orderTagId: FieldRef<"Order", 'String'>
    readonly wrapId: FieldRef<"Order", 'String'>
    readonly preferenceId: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    comboId: string | null
    productId: string | null
    quantity: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    comboId: string | null
    productId: string | null
    quantity: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    comboId: number
    productId: number
    quantity: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    comboId?: true
    productId?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    comboId?: true
    productId?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    comboId?: true
    productId?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    comboId: string | null
    productId: string | null
    quantity: number
    price: number
    createdAt: Date
    updatedAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    comboId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    combo?: boolean | OrderItem$comboArgs<ExtArgs>
    product?: boolean | OrderItem$productArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    comboId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    combo?: boolean | OrderItem$comboArgs<ExtArgs>
    product?: boolean | OrderItem$productArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    comboId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    combo?: boolean | OrderItem$comboArgs<ExtArgs>
    product?: boolean | OrderItem$productArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    comboId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "comboId" | "productId" | "quantity" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    combo?: boolean | OrderItem$comboArgs<ExtArgs>
    product?: boolean | OrderItem$productArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    combo?: boolean | OrderItem$comboArgs<ExtArgs>
    product?: boolean | OrderItem$productArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    combo?: boolean | OrderItem$comboArgs<ExtArgs>
    product?: boolean | OrderItem$productArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      combo: Prisma.$ComboPayload<ExtArgs> | null
      product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      comboId: string | null
      productId: string | null
      quantity: number
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    combo<T extends OrderItem$comboArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$comboArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    product<T extends OrderItem$productArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly comboId: FieldRef<"OrderItem", 'String'>
    readonly productId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly price: FieldRef<"OrderItem", 'Int'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem.combo
   */
  export type OrderItem$comboArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    where?: ComboWhereInput
  }

  /**
   * OrderItem.product
   */
  export type OrderItem$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    imageUrl: 'imageUrl',
    stock: 'stock',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ComboScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    totalPrice: 'totalPrice',
    discountAmount: 'discountAmount',
    perUnitPrice: 'perUnitPrice',
    perUnitDiscount: 'perUnitDiscount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ComboScalarFieldEnum = (typeof ComboScalarFieldEnum)[keyof typeof ComboScalarFieldEnum]


  export const ComboItemScalarFieldEnum: {
    id: 'id',
    comboId: 'comboId',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ComboItemScalarFieldEnum = (typeof ComboItemScalarFieldEnum)[keyof typeof ComboItemScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    comboId: 'comboId',
    productId: 'productId',
    cartId: 'cartId',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const DeliveryInfoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    contact: 'contact',
    addressLine: 'addressLine',
    city: 'city',
    state: 'state',
    postalCode: 'postalCode',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeliveryInfoScalarFieldEnum = (typeof DeliveryInfoScalarFieldEnum)[keyof typeof DeliveryInfoScalarFieldEnum]


  export const OrderTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isPublic: 'isPublic',
    price: 'price',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderTagScalarFieldEnum = (typeof OrderTagScalarFieldEnum)[keyof typeof OrderTagScalarFieldEnum]


  export const WrapScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isPremium: 'isPremium',
    price: 'price',
    imageUrl: 'imageUrl'
  };

  export type WrapScalarFieldEnum = (typeof WrapScalarFieldEnum)[keyof typeof WrapScalarFieldEnum]


  export const PreferencePriceScalarFieldEnum: {
    id: 'id',
    preference: 'preference',
    price: 'price'
  };

  export type PreferencePriceScalarFieldEnum = (typeof PreferencePriceScalarFieldEnum)[keyof typeof PreferencePriceScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deliveryId: 'deliveryId',
    deliveryCharge: 'deliveryCharge',
    status: 'status',
    totalPrice: 'totalPrice',
    razorpayOrderId: 'razorpayOrderId',
    paymentStatus: 'paymentStatus',
    orderTagId: 'orderTagId',
    wrapId: 'wrapId',
    preferenceId: 'preferenceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    comboId: 'comboId',
    productId: 'productId',
    quantity: 'quantity',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Preference'
   */
  export type EnumPreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Preference'>
    


  /**
   * Reference to a field of type 'Preference[]'
   */
  export type ListEnumPreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Preference[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    combo?: ComboListRelationFilter
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    deliveryInfo?: DeliveryInfoListRelationFilter
    order?: OrderListRelationFilter
    orderTag?: OrderTagListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    combo?: ComboOrderByRelationAggregateInput
    cart?: CartOrderByWithRelationInput
    deliveryInfo?: DeliveryInfoOrderByRelationAggregateInput
    order?: OrderOrderByRelationAggregateInput
    orderTag?: OrderTagOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    combo?: ComboListRelationFilter
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    deliveryInfo?: DeliveryInfoListRelationFilter
    order?: OrderListRelationFilter
    orderTag?: OrderTagListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    imageUrl?: StringFilter<"Product"> | string
    stock?: IntFilter<"Product"> | number
    categoryId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    comboItem?: ComboItemListRelationFilter
    cartItem?: CartItemListRelationFilter
    orderItem?: OrderItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    comboItem?: ComboItemOrderByRelationAggregateInput
    cartItem?: CartItemOrderByRelationAggregateInput
    orderItem?: OrderItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    imageUrl?: StringFilter<"Product"> | string
    stock?: IntFilter<"Product"> | number
    categoryId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    comboItem?: ComboItemListRelationFilter
    cartItem?: CartItemListRelationFilter
    orderItem?: OrderItemListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    imageUrl?: StringWithAggregatesFilter<"Product"> | string
    stock?: IntWithAggregatesFilter<"Product"> | number
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ComboWhereInput = {
    AND?: ComboWhereInput | ComboWhereInput[]
    OR?: ComboWhereInput[]
    NOT?: ComboWhereInput | ComboWhereInput[]
    id?: StringFilter<"Combo"> | string
    name?: StringFilter<"Combo"> | string
    userId?: StringNullableFilter<"Combo"> | string | null
    totalPrice?: FloatNullableFilter<"Combo"> | number | null
    discountAmount?: FloatNullableFilter<"Combo"> | number | null
    perUnitPrice?: FloatNullableFilter<"Combo"> | number | null
    perUnitDiscount?: FloatNullableFilter<"Combo"> | number | null
    createdAt?: DateTimeFilter<"Combo"> | Date | string
    updatedAt?: DateTimeFilter<"Combo"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comboItem?: ComboItemListRelationFilter
    cartItem?: CartItemListRelationFilter
    orderItem?: OrderItemListRelationFilter
  }

  export type ComboOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrderInput | SortOrder
    totalPrice?: SortOrderInput | SortOrder
    discountAmount?: SortOrderInput | SortOrder
    perUnitPrice?: SortOrderInput | SortOrder
    perUnitDiscount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    comboItem?: ComboItemOrderByRelationAggregateInput
    cartItem?: CartItemOrderByRelationAggregateInput
    orderItem?: OrderItemOrderByRelationAggregateInput
  }

  export type ComboWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ComboWhereInput | ComboWhereInput[]
    OR?: ComboWhereInput[]
    NOT?: ComboWhereInput | ComboWhereInput[]
    name?: StringFilter<"Combo"> | string
    userId?: StringNullableFilter<"Combo"> | string | null
    totalPrice?: FloatNullableFilter<"Combo"> | number | null
    discountAmount?: FloatNullableFilter<"Combo"> | number | null
    perUnitPrice?: FloatNullableFilter<"Combo"> | number | null
    perUnitDiscount?: FloatNullableFilter<"Combo"> | number | null
    createdAt?: DateTimeFilter<"Combo"> | Date | string
    updatedAt?: DateTimeFilter<"Combo"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comboItem?: ComboItemListRelationFilter
    cartItem?: CartItemListRelationFilter
    orderItem?: OrderItemListRelationFilter
  }, "id">

  export type ComboOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrderInput | SortOrder
    totalPrice?: SortOrderInput | SortOrder
    discountAmount?: SortOrderInput | SortOrder
    perUnitPrice?: SortOrderInput | SortOrder
    perUnitDiscount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ComboCountOrderByAggregateInput
    _avg?: ComboAvgOrderByAggregateInput
    _max?: ComboMaxOrderByAggregateInput
    _min?: ComboMinOrderByAggregateInput
    _sum?: ComboSumOrderByAggregateInput
  }

  export type ComboScalarWhereWithAggregatesInput = {
    AND?: ComboScalarWhereWithAggregatesInput | ComboScalarWhereWithAggregatesInput[]
    OR?: ComboScalarWhereWithAggregatesInput[]
    NOT?: ComboScalarWhereWithAggregatesInput | ComboScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Combo"> | string
    name?: StringWithAggregatesFilter<"Combo"> | string
    userId?: StringNullableWithAggregatesFilter<"Combo"> | string | null
    totalPrice?: FloatNullableWithAggregatesFilter<"Combo"> | number | null
    discountAmount?: FloatNullableWithAggregatesFilter<"Combo"> | number | null
    perUnitPrice?: FloatNullableWithAggregatesFilter<"Combo"> | number | null
    perUnitDiscount?: FloatNullableWithAggregatesFilter<"Combo"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Combo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Combo"> | Date | string
  }

  export type ComboItemWhereInput = {
    AND?: ComboItemWhereInput | ComboItemWhereInput[]
    OR?: ComboItemWhereInput[]
    NOT?: ComboItemWhereInput | ComboItemWhereInput[]
    id?: StringFilter<"ComboItem"> | string
    comboId?: StringFilter<"ComboItem"> | string
    productId?: StringFilter<"ComboItem"> | string
    createdAt?: DateTimeFilter<"ComboItem"> | Date | string
    updatedAt?: DateTimeFilter<"ComboItem"> | Date | string
    combo?: XOR<ComboScalarRelationFilter, ComboWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ComboItemOrderByWithRelationInput = {
    id?: SortOrder
    comboId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    combo?: ComboOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ComboItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    comboId_productId?: ComboItemComboIdProductIdCompoundUniqueInput
    AND?: ComboItemWhereInput | ComboItemWhereInput[]
    OR?: ComboItemWhereInput[]
    NOT?: ComboItemWhereInput | ComboItemWhereInput[]
    comboId?: StringFilter<"ComboItem"> | string
    productId?: StringFilter<"ComboItem"> | string
    createdAt?: DateTimeFilter<"ComboItem"> | Date | string
    updatedAt?: DateTimeFilter<"ComboItem"> | Date | string
    combo?: XOR<ComboScalarRelationFilter, ComboWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "comboId_productId">

  export type ComboItemOrderByWithAggregationInput = {
    id?: SortOrder
    comboId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ComboItemCountOrderByAggregateInput
    _max?: ComboItemMaxOrderByAggregateInput
    _min?: ComboItemMinOrderByAggregateInput
  }

  export type ComboItemScalarWhereWithAggregatesInput = {
    AND?: ComboItemScalarWhereWithAggregatesInput | ComboItemScalarWhereWithAggregatesInput[]
    OR?: ComboItemScalarWhereWithAggregatesInput[]
    NOT?: ComboItemScalarWhereWithAggregatesInput | ComboItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ComboItem"> | string
    comboId?: StringWithAggregatesFilter<"ComboItem"> | string
    productId?: StringWithAggregatesFilter<"ComboItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ComboItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ComboItem"> | Date | string
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: StringFilter<"Cart"> | string
    userId?: StringFilter<"Cart"> | string
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cartItem?: CartItemListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    cartItem?: CartItemOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cartItem?: CartItemListRelationFilter
  }, "id" | "userId">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cart"> | string
    userId?: StringWithAggregatesFilter<"Cart"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: StringFilter<"CartItem"> | string
    comboId?: StringNullableFilter<"CartItem"> | string | null
    productId?: StringNullableFilter<"CartItem"> | string | null
    cartId?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    combo?: XOR<ComboNullableScalarRelationFilter, ComboWhereInput> | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    comboId?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    cartId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    combo?: ComboOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    cart?: CartOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cartId_comboId?: CartItemCartIdComboIdCompoundUniqueInput
    cartId_productId?: CartItemCartIdProductIdCompoundUniqueInput
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    comboId?: StringNullableFilter<"CartItem"> | string | null
    productId?: StringNullableFilter<"CartItem"> | string | null
    cartId?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    combo?: XOR<ComboNullableScalarRelationFilter, ComboWhereInput> | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
  }, "id" | "cartId_comboId" | "cartId_productId">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    comboId?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    cartId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CartItem"> | string
    comboId?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
    productId?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
    cartId?: StringWithAggregatesFilter<"CartItem"> | string
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
  }

  export type DeliveryInfoWhereInput = {
    AND?: DeliveryInfoWhereInput | DeliveryInfoWhereInput[]
    OR?: DeliveryInfoWhereInput[]
    NOT?: DeliveryInfoWhereInput | DeliveryInfoWhereInput[]
    id?: StringFilter<"DeliveryInfo"> | string
    userId?: StringFilter<"DeliveryInfo"> | string
    name?: StringFilter<"DeliveryInfo"> | string
    contact?: StringFilter<"DeliveryInfo"> | string
    addressLine?: StringFilter<"DeliveryInfo"> | string
    city?: StringFilter<"DeliveryInfo"> | string
    state?: StringFilter<"DeliveryInfo"> | string
    postalCode?: StringFilter<"DeliveryInfo"> | string
    country?: StringFilter<"DeliveryInfo"> | string
    createdAt?: DateTimeFilter<"DeliveryInfo"> | Date | string
    updatedAt?: DateTimeFilter<"DeliveryInfo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: OrderListRelationFilter
  }

  export type DeliveryInfoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    addressLine?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    order?: OrderOrderByRelationAggregateInput
  }

  export type DeliveryInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeliveryInfoWhereInput | DeliveryInfoWhereInput[]
    OR?: DeliveryInfoWhereInput[]
    NOT?: DeliveryInfoWhereInput | DeliveryInfoWhereInput[]
    userId?: StringFilter<"DeliveryInfo"> | string
    name?: StringFilter<"DeliveryInfo"> | string
    contact?: StringFilter<"DeliveryInfo"> | string
    addressLine?: StringFilter<"DeliveryInfo"> | string
    city?: StringFilter<"DeliveryInfo"> | string
    state?: StringFilter<"DeliveryInfo"> | string
    postalCode?: StringFilter<"DeliveryInfo"> | string
    country?: StringFilter<"DeliveryInfo"> | string
    createdAt?: DateTimeFilter<"DeliveryInfo"> | Date | string
    updatedAt?: DateTimeFilter<"DeliveryInfo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: OrderListRelationFilter
  }, "id">

  export type DeliveryInfoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    addressLine?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeliveryInfoCountOrderByAggregateInput
    _max?: DeliveryInfoMaxOrderByAggregateInput
    _min?: DeliveryInfoMinOrderByAggregateInput
  }

  export type DeliveryInfoScalarWhereWithAggregatesInput = {
    AND?: DeliveryInfoScalarWhereWithAggregatesInput | DeliveryInfoScalarWhereWithAggregatesInput[]
    OR?: DeliveryInfoScalarWhereWithAggregatesInput[]
    NOT?: DeliveryInfoScalarWhereWithAggregatesInput | DeliveryInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeliveryInfo"> | string
    userId?: StringWithAggregatesFilter<"DeliveryInfo"> | string
    name?: StringWithAggregatesFilter<"DeliveryInfo"> | string
    contact?: StringWithAggregatesFilter<"DeliveryInfo"> | string
    addressLine?: StringWithAggregatesFilter<"DeliveryInfo"> | string
    city?: StringWithAggregatesFilter<"DeliveryInfo"> | string
    state?: StringWithAggregatesFilter<"DeliveryInfo"> | string
    postalCode?: StringWithAggregatesFilter<"DeliveryInfo"> | string
    country?: StringWithAggregatesFilter<"DeliveryInfo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DeliveryInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DeliveryInfo"> | Date | string
  }

  export type OrderTagWhereInput = {
    AND?: OrderTagWhereInput | OrderTagWhereInput[]
    OR?: OrderTagWhereInput[]
    NOT?: OrderTagWhereInput | OrderTagWhereInput[]
    id?: StringFilter<"OrderTag"> | string
    name?: StringFilter<"OrderTag"> | string
    isPublic?: BoolFilter<"OrderTag"> | boolean
    price?: IntFilter<"OrderTag"> | number
    userId?: StringFilter<"OrderTag"> | string
    createdAt?: DateTimeFilter<"OrderTag"> | Date | string
    updatedAt?: DateTimeFilter<"OrderTag"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    orders?: OrderListRelationFilter
  }

  export type OrderTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isPublic?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type OrderTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: OrderTagWhereInput | OrderTagWhereInput[]
    OR?: OrderTagWhereInput[]
    NOT?: OrderTagWhereInput | OrderTagWhereInput[]
    isPublic?: BoolFilter<"OrderTag"> | boolean
    price?: IntFilter<"OrderTag"> | number
    userId?: StringFilter<"OrderTag"> | string
    createdAt?: DateTimeFilter<"OrderTag"> | Date | string
    updatedAt?: DateTimeFilter<"OrderTag"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    orders?: OrderListRelationFilter
  }, "id" | "name">

  export type OrderTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isPublic?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderTagCountOrderByAggregateInput
    _avg?: OrderTagAvgOrderByAggregateInput
    _max?: OrderTagMaxOrderByAggregateInput
    _min?: OrderTagMinOrderByAggregateInput
    _sum?: OrderTagSumOrderByAggregateInput
  }

  export type OrderTagScalarWhereWithAggregatesInput = {
    AND?: OrderTagScalarWhereWithAggregatesInput | OrderTagScalarWhereWithAggregatesInput[]
    OR?: OrderTagScalarWhereWithAggregatesInput[]
    NOT?: OrderTagScalarWhereWithAggregatesInput | OrderTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderTag"> | string
    name?: StringWithAggregatesFilter<"OrderTag"> | string
    isPublic?: BoolWithAggregatesFilter<"OrderTag"> | boolean
    price?: IntWithAggregatesFilter<"OrderTag"> | number
    userId?: StringWithAggregatesFilter<"OrderTag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderTag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderTag"> | Date | string
  }

  export type WrapWhereInput = {
    AND?: WrapWhereInput | WrapWhereInput[]
    OR?: WrapWhereInput[]
    NOT?: WrapWhereInput | WrapWhereInput[]
    id?: StringFilter<"Wrap"> | string
    name?: StringFilter<"Wrap"> | string
    isPremium?: BoolFilter<"Wrap"> | boolean
    price?: IntFilter<"Wrap"> | number
    imageUrl?: StringFilter<"Wrap"> | string
    orders?: OrderListRelationFilter
  }

  export type WrapOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isPremium?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
  }

  export type WrapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: WrapWhereInput | WrapWhereInput[]
    OR?: WrapWhereInput[]
    NOT?: WrapWhereInput | WrapWhereInput[]
    isPremium?: BoolFilter<"Wrap"> | boolean
    price?: IntFilter<"Wrap"> | number
    imageUrl?: StringFilter<"Wrap"> | string
    orders?: OrderListRelationFilter
  }, "id" | "name">

  export type WrapOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isPremium?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    _count?: WrapCountOrderByAggregateInput
    _avg?: WrapAvgOrderByAggregateInput
    _max?: WrapMaxOrderByAggregateInput
    _min?: WrapMinOrderByAggregateInput
    _sum?: WrapSumOrderByAggregateInput
  }

  export type WrapScalarWhereWithAggregatesInput = {
    AND?: WrapScalarWhereWithAggregatesInput | WrapScalarWhereWithAggregatesInput[]
    OR?: WrapScalarWhereWithAggregatesInput[]
    NOT?: WrapScalarWhereWithAggregatesInput | WrapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wrap"> | string
    name?: StringWithAggregatesFilter<"Wrap"> | string
    isPremium?: BoolWithAggregatesFilter<"Wrap"> | boolean
    price?: IntWithAggregatesFilter<"Wrap"> | number
    imageUrl?: StringWithAggregatesFilter<"Wrap"> | string
  }

  export type PreferencePriceWhereInput = {
    AND?: PreferencePriceWhereInput | PreferencePriceWhereInput[]
    OR?: PreferencePriceWhereInput[]
    NOT?: PreferencePriceWhereInput | PreferencePriceWhereInput[]
    id?: StringFilter<"PreferencePrice"> | string
    preference?: EnumPreferenceFilter<"PreferencePrice"> | $Enums.Preference
    price?: IntFilter<"PreferencePrice"> | number
    orders?: OrderListRelationFilter
  }

  export type PreferencePriceOrderByWithRelationInput = {
    id?: SortOrder
    preference?: SortOrder
    price?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
  }

  export type PreferencePriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    preference?: $Enums.Preference
    AND?: PreferencePriceWhereInput | PreferencePriceWhereInput[]
    OR?: PreferencePriceWhereInput[]
    NOT?: PreferencePriceWhereInput | PreferencePriceWhereInput[]
    price?: IntFilter<"PreferencePrice"> | number
    orders?: OrderListRelationFilter
  }, "id" | "preference">

  export type PreferencePriceOrderByWithAggregationInput = {
    id?: SortOrder
    preference?: SortOrder
    price?: SortOrder
    _count?: PreferencePriceCountOrderByAggregateInput
    _avg?: PreferencePriceAvgOrderByAggregateInput
    _max?: PreferencePriceMaxOrderByAggregateInput
    _min?: PreferencePriceMinOrderByAggregateInput
    _sum?: PreferencePriceSumOrderByAggregateInput
  }

  export type PreferencePriceScalarWhereWithAggregatesInput = {
    AND?: PreferencePriceScalarWhereWithAggregatesInput | PreferencePriceScalarWhereWithAggregatesInput[]
    OR?: PreferencePriceScalarWhereWithAggregatesInput[]
    NOT?: PreferencePriceScalarWhereWithAggregatesInput | PreferencePriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PreferencePrice"> | string
    preference?: EnumPreferenceWithAggregatesFilter<"PreferencePrice"> | $Enums.Preference
    price?: IntWithAggregatesFilter<"PreferencePrice"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    deliveryId?: StringFilter<"Order"> | string
    deliveryCharge?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalPrice?: IntFilter<"Order"> | number
    razorpayOrderId?: StringNullableFilter<"Order"> | string | null
    paymentStatus?: StringNullableFilter<"Order"> | string | null
    orderTagId?: StringFilter<"Order"> | string
    wrapId?: StringFilter<"Order"> | string
    preferenceId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    delivery?: XOR<DeliveryInfoScalarRelationFilter, DeliveryInfoWhereInput>
    orderItems?: OrderItemListRelationFilter
    tag?: XOR<OrderTagScalarRelationFilter, OrderTagWhereInput>
    wrap?: XOR<WrapScalarRelationFilter, WrapWhereInput>
    preference?: XOR<PreferencePriceScalarRelationFilter, PreferencePriceWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deliveryId?: SortOrder
    deliveryCharge?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    orderTagId?: SortOrder
    wrapId?: SortOrder
    preferenceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    delivery?: DeliveryInfoOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    tag?: OrderTagOrderByWithRelationInput
    wrap?: WrapOrderByWithRelationInput
    preference?: PreferencePriceOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayOrderId?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    deliveryId?: StringFilter<"Order"> | string
    deliveryCharge?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalPrice?: IntFilter<"Order"> | number
    paymentStatus?: StringNullableFilter<"Order"> | string | null
    orderTagId?: StringFilter<"Order"> | string
    wrapId?: StringFilter<"Order"> | string
    preferenceId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    delivery?: XOR<DeliveryInfoScalarRelationFilter, DeliveryInfoWhereInput>
    orderItems?: OrderItemListRelationFilter
    tag?: XOR<OrderTagScalarRelationFilter, OrderTagWhereInput>
    wrap?: XOR<WrapScalarRelationFilter, WrapWhereInput>
    preference?: XOR<PreferencePriceScalarRelationFilter, PreferencePriceWhereInput>
  }, "id" | "razorpayOrderId">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deliveryId?: SortOrder
    deliveryCharge?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    orderTagId?: SortOrder
    wrapId?: SortOrder
    preferenceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    deliveryId?: StringWithAggregatesFilter<"Order"> | string
    deliveryCharge?: IntWithAggregatesFilter<"Order"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    totalPrice?: IntWithAggregatesFilter<"Order"> | number
    razorpayOrderId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    paymentStatus?: StringNullableWithAggregatesFilter<"Order"> | string | null
    orderTagId?: StringWithAggregatesFilter<"Order"> | string
    wrapId?: StringWithAggregatesFilter<"Order"> | string
    preferenceId?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    comboId?: StringNullableFilter<"OrderItem"> | string | null
    productId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    price?: IntFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    combo?: XOR<ComboNullableScalarRelationFilter, ComboWhereInput> | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    comboId?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    combo?: ComboOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    comboId?: StringNullableFilter<"OrderItem"> | string | null
    productId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    price?: IntFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    combo?: XOR<ComboNullableScalarRelationFilter, ComboWhereInput> | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    comboId?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    comboId?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    productId?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    price?: IntWithAggregatesFilter<"OrderItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    combo?: ComboCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutUserInput
    deliveryInfo?: DeliveryInfoCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutUserInput
    orderTag?: OrderTagCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    combo?: ComboUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
    deliveryInfo?: DeliveryInfoUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutUserInput
    orderTag?: OrderTagUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    combo?: ComboUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutUserNestedInput
    deliveryInfo?: DeliveryInfoUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutUserNestedInput
    orderTag?: OrderTagUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    combo?: ComboUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
    deliveryInfo?: DeliveryInfoUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    orderTag?: OrderTagUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    comboItem?: ComboItemCreateNestedManyWithoutProductInput
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    orderItem?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    stock: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comboItem?: ComboItemUncheckedCreateNestedManyWithoutProductInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    comboItem?: ComboItemUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comboItem?: ComboItemUncheckedUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    stock: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ComboCreateInput = {
    id?: string
    name: string
    totalPrice?: number | null
    discountAmount?: number | null
    perUnitPrice?: number | null
    perUnitDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutComboInput
    comboItem?: ComboItemCreateNestedManyWithoutComboInput
    cartItem?: CartItemCreateNestedManyWithoutComboInput
    orderItem?: OrderItemCreateNestedManyWithoutComboInput
  }

  export type ComboUncheckedCreateInput = {
    id?: string
    name: string
    userId?: string | null
    totalPrice?: number | null
    discountAmount?: number | null
    perUnitPrice?: number | null
    perUnitDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comboItem?: ComboItemUncheckedCreateNestedManyWithoutComboInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutComboInput
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutComboInput
  }

  export type ComboUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutComboNestedInput
    comboItem?: ComboItemUpdateManyWithoutComboNestedInput
    cartItem?: CartItemUpdateManyWithoutComboNestedInput
    orderItem?: OrderItemUpdateManyWithoutComboNestedInput
  }

  export type ComboUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comboItem?: ComboItemUncheckedUpdateManyWithoutComboNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutComboNestedInput
    orderItem?: OrderItemUncheckedUpdateManyWithoutComboNestedInput
  }

  export type ComboCreateManyInput = {
    id?: string
    name: string
    userId?: string | null
    totalPrice?: number | null
    discountAmount?: number | null
    perUnitPrice?: number | null
    perUnitDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComboUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComboUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComboItemCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    combo: ComboCreateNestedOneWithoutComboItemInput
    product: ProductCreateNestedOneWithoutComboItemInput
  }

  export type ComboItemUncheckedCreateInput = {
    id?: string
    comboId: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComboItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    combo?: ComboUpdateOneRequiredWithoutComboItemNestedInput
    product?: ProductUpdateOneRequiredWithoutComboItemNestedInput
  }

  export type ComboItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comboId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComboItemCreateManyInput = {
    id?: string
    comboId: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComboItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComboItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    comboId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartInput
    cartItem?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartNestedInput
    cartItem?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateInput = {
    id?: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    combo?: ComboCreateNestedOneWithoutCartItemInput
    product?: ProductCreateNestedOneWithoutCartItemInput
    cart: CartCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: string
    comboId?: string | null
    productId?: string | null
    cartId: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    combo?: ComboUpdateOneWithoutCartItemNestedInput
    product?: ProductUpdateOneWithoutCartItemNestedInput
    cart?: CartUpdateOneRequiredWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comboId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    cartId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyInput = {
    id?: string
    comboId?: string | null
    productId?: string | null
    cartId: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    comboId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    cartId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryInfoCreateInput = {
    id?: string
    name: string
    contact: string
    addressLine: string
    city: string
    state: string
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDeliveryInfoInput
    order?: OrderCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryInfoUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    contact: string
    addressLine: string
    city: string
    state: string
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: OrderUncheckedCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDeliveryInfoNestedInput
    order?: OrderUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUncheckedUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryInfoCreateManyInput = {
    id?: string
    userId: string
    name: string
    contact: string
    addressLine: string
    city: string
    state: string
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderTagCreateInput = {
    id?: string
    name: string
    isPublic?: boolean
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutOrderTagInput
    orders?: OrderCreateNestedManyWithoutTagInput
  }

  export type OrderTagUncheckedCreateInput = {
    id?: string
    name: string
    isPublic?: boolean
    price?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutTagInput
  }

  export type OrderTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutOrderTagNestedInput
    orders?: OrderUpdateManyWithoutTagNestedInput
  }

  export type OrderTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutTagNestedInput
  }

  export type OrderTagCreateManyInput = {
    id?: string
    name: string
    isPublic?: boolean
    price?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WrapCreateInput = {
    id?: string
    name: string
    isPremium?: boolean
    price?: number
    imageUrl: string
    orders?: OrderCreateNestedManyWithoutWrapInput
  }

  export type WrapUncheckedCreateInput = {
    id?: string
    name: string
    isPremium?: boolean
    price?: number
    imageUrl: string
    orders?: OrderUncheckedCreateNestedManyWithoutWrapInput
  }

  export type WrapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutWrapNestedInput
  }

  export type WrapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutWrapNestedInput
  }

  export type WrapCreateManyInput = {
    id?: string
    name: string
    isPremium?: boolean
    price?: number
    imageUrl: string
  }

  export type WrapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type WrapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PreferencePriceCreateInput = {
    id?: string
    preference: $Enums.Preference
    price: number
    orders?: OrderCreateNestedManyWithoutPreferenceInput
  }

  export type PreferencePriceUncheckedCreateInput = {
    id?: string
    preference: $Enums.Preference
    price: number
    orders?: OrderUncheckedCreateNestedManyWithoutPreferenceInput
  }

  export type PreferencePriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    preference?: EnumPreferenceFieldUpdateOperationsInput | $Enums.Preference
    price?: IntFieldUpdateOperationsInput | number
    orders?: OrderUpdateManyWithoutPreferenceNestedInput
  }

  export type PreferencePriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    preference?: EnumPreferenceFieldUpdateOperationsInput | $Enums.Preference
    price?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutPreferenceNestedInput
  }

  export type PreferencePriceCreateManyInput = {
    id?: string
    preference: $Enums.Preference
    price: number
  }

  export type PreferencePriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    preference?: EnumPreferenceFieldUpdateOperationsInput | $Enums.Preference
    price?: IntFieldUpdateOperationsInput | number
  }

  export type PreferencePriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    preference?: EnumPreferenceFieldUpdateOperationsInput | $Enums.Preference
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    id?: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrderInput
    delivery: DeliveryInfoCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    tag: OrderTagCreateNestedOneWithoutOrdersInput
    wrap: WrapCreateNestedOneWithoutOrdersInput
    preference: PreferencePriceCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId: string
    deliveryId: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    orderTagId: string
    wrapId: string
    preferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
    delivery?: DeliveryInfoUpdateOneRequiredWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    tag?: OrderTagUpdateOneRequiredWithoutOrdersNestedInput
    wrap?: WrapUpdateOneRequiredWithoutOrdersNestedInput
    preference?: PreferencePriceUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    orderTagId?: StringFieldUpdateOperationsInput | string
    wrapId?: StringFieldUpdateOperationsInput | string
    preferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    userId: string
    deliveryId: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    orderTagId: string
    wrapId: string
    preferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    orderTagId?: StringFieldUpdateOperationsInput | string
    wrapId?: StringFieldUpdateOperationsInput | string
    preferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    combo?: ComboCreateNestedOneWithoutOrderItemInput
    product?: ProductCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    comboId?: string | null
    productId?: string | null
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    combo?: ComboUpdateOneWithoutOrderItemNestedInput
    product?: ProductUpdateOneWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    comboId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    comboId?: string | null
    productId?: string | null
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    comboId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ComboListRelationFilter = {
    every?: ComboWhereInput
    some?: ComboWhereInput
    none?: ComboWhereInput
  }

  export type CartNullableScalarRelationFilter = {
    is?: CartWhereInput | null
    isNot?: CartWhereInput | null
  }

  export type DeliveryInfoListRelationFilter = {
    every?: DeliveryInfoWhereInput
    some?: DeliveryInfoWhereInput
    none?: DeliveryInfoWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderTagListRelationFilter = {
    every?: OrderTagWhereInput
    some?: OrderTagWhereInput
    none?: OrderTagWhereInput
  }

  export type ComboOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliveryInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ComboItemListRelationFilter = {
    every?: ComboItemWhereInput
    some?: ComboItemWhereInput
    none?: ComboItemWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type ComboItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ComboCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    discountAmount?: SortOrder
    perUnitPrice?: SortOrder
    perUnitDiscount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComboAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
    discountAmount?: SortOrder
    perUnitPrice?: SortOrder
    perUnitDiscount?: SortOrder
  }

  export type ComboMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    discountAmount?: SortOrder
    perUnitPrice?: SortOrder
    perUnitDiscount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComboMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    discountAmount?: SortOrder
    perUnitPrice?: SortOrder
    perUnitDiscount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComboSumOrderByAggregateInput = {
    totalPrice?: SortOrder
    discountAmount?: SortOrder
    perUnitPrice?: SortOrder
    perUnitDiscount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ComboScalarRelationFilter = {
    is?: ComboWhereInput
    isNot?: ComboWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ComboItemComboIdProductIdCompoundUniqueInput = {
    comboId: string
    productId: string
  }

  export type ComboItemCountOrderByAggregateInput = {
    id?: SortOrder
    comboId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComboItemMaxOrderByAggregateInput = {
    id?: SortOrder
    comboId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComboItemMinOrderByAggregateInput = {
    id?: SortOrder
    comboId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComboNullableScalarRelationFilter = {
    is?: ComboWhereInput | null
    isNot?: ComboWhereInput | null
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type CartScalarRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type CartItemCartIdComboIdCompoundUniqueInput = {
    cartId: string
    comboId: string
  }

  export type CartItemCartIdProductIdCompoundUniqueInput = {
    cartId: string
    productId: string
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    comboId?: SortOrder
    productId?: SortOrder
    cartId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    comboId?: SortOrder
    productId?: SortOrder
    cartId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    comboId?: SortOrder
    productId?: SortOrder
    cartId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type DeliveryInfoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    addressLine?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveryInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    addressLine?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveryInfoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    addressLine?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrderTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isPublic?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderTagAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type OrderTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isPublic?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isPublic?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderTagSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WrapCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isPremium?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
  }

  export type WrapAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type WrapMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isPremium?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
  }

  export type WrapMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isPremium?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
  }

  export type WrapSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumPreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.Preference | EnumPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.Preference[] | ListEnumPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Preference[] | ListEnumPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferenceFilter<$PrismaModel> | $Enums.Preference
  }

  export type PreferencePriceCountOrderByAggregateInput = {
    id?: SortOrder
    preference?: SortOrder
    price?: SortOrder
  }

  export type PreferencePriceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PreferencePriceMaxOrderByAggregateInput = {
    id?: SortOrder
    preference?: SortOrder
    price?: SortOrder
  }

  export type PreferencePriceMinOrderByAggregateInput = {
    id?: SortOrder
    preference?: SortOrder
    price?: SortOrder
  }

  export type PreferencePriceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumPreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Preference | EnumPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.Preference[] | ListEnumPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Preference[] | ListEnumPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferenceWithAggregatesFilter<$PrismaModel> | $Enums.Preference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPreferenceFilter<$PrismaModel>
    _max?: NestedEnumPreferenceFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type DeliveryInfoScalarRelationFilter = {
    is?: DeliveryInfoWhereInput
    isNot?: DeliveryInfoWhereInput
  }

  export type OrderTagScalarRelationFilter = {
    is?: OrderTagWhereInput
    isNot?: OrderTagWhereInput
  }

  export type WrapScalarRelationFilter = {
    is?: WrapWhereInput
    isNot?: WrapWhereInput
  }

  export type PreferencePriceScalarRelationFilter = {
    is?: PreferencePriceWhereInput
    isNot?: PreferencePriceWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deliveryId?: SortOrder
    deliveryCharge?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    razorpayOrderId?: SortOrder
    paymentStatus?: SortOrder
    orderTagId?: SortOrder
    wrapId?: SortOrder
    preferenceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    deliveryCharge?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deliveryId?: SortOrder
    deliveryCharge?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    razorpayOrderId?: SortOrder
    paymentStatus?: SortOrder
    orderTagId?: SortOrder
    wrapId?: SortOrder
    preferenceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deliveryId?: SortOrder
    deliveryCharge?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    razorpayOrderId?: SortOrder
    paymentStatus?: SortOrder
    orderTagId?: SortOrder
    wrapId?: SortOrder
    preferenceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    deliveryCharge?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    comboId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    comboId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    comboId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type ComboCreateNestedManyWithoutUserInput = {
    create?: XOR<ComboCreateWithoutUserInput, ComboUncheckedCreateWithoutUserInput> | ComboCreateWithoutUserInput[] | ComboUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComboCreateOrConnectWithoutUserInput | ComboCreateOrConnectWithoutUserInput[]
    createMany?: ComboCreateManyUserInputEnvelope
    connect?: ComboWhereUniqueInput | ComboWhereUniqueInput[]
  }

  export type CartCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    connect?: CartWhereUniqueInput
  }

  export type DeliveryInfoCreateNestedManyWithoutUserInput = {
    create?: XOR<DeliveryInfoCreateWithoutUserInput, DeliveryInfoUncheckedCreateWithoutUserInput> | DeliveryInfoCreateWithoutUserInput[] | DeliveryInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryInfoCreateOrConnectWithoutUserInput | DeliveryInfoCreateOrConnectWithoutUserInput[]
    createMany?: DeliveryInfoCreateManyUserInputEnvelope
    connect?: DeliveryInfoWhereUniqueInput | DeliveryInfoWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderTagCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<OrderTagCreateWithoutCreatedByInput, OrderTagUncheckedCreateWithoutCreatedByInput> | OrderTagCreateWithoutCreatedByInput[] | OrderTagUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderTagCreateOrConnectWithoutCreatedByInput | OrderTagCreateOrConnectWithoutCreatedByInput[]
    createMany?: OrderTagCreateManyCreatedByInputEnvelope
    connect?: OrderTagWhereUniqueInput | OrderTagWhereUniqueInput[]
  }

  export type ComboUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ComboCreateWithoutUserInput, ComboUncheckedCreateWithoutUserInput> | ComboCreateWithoutUserInput[] | ComboUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComboCreateOrConnectWithoutUserInput | ComboCreateOrConnectWithoutUserInput[]
    createMany?: ComboCreateManyUserInputEnvelope
    connect?: ComboWhereUniqueInput | ComboWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    connect?: CartWhereUniqueInput
  }

  export type DeliveryInfoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeliveryInfoCreateWithoutUserInput, DeliveryInfoUncheckedCreateWithoutUserInput> | DeliveryInfoCreateWithoutUserInput[] | DeliveryInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryInfoCreateOrConnectWithoutUserInput | DeliveryInfoCreateOrConnectWithoutUserInput[]
    createMany?: DeliveryInfoCreateManyUserInputEnvelope
    connect?: DeliveryInfoWhereUniqueInput | DeliveryInfoWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderTagUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<OrderTagCreateWithoutCreatedByInput, OrderTagUncheckedCreateWithoutCreatedByInput> | OrderTagCreateWithoutCreatedByInput[] | OrderTagUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderTagCreateOrConnectWithoutCreatedByInput | OrderTagCreateOrConnectWithoutCreatedByInput[]
    createMany?: OrderTagCreateManyCreatedByInputEnvelope
    connect?: OrderTagWhereUniqueInput | OrderTagWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ComboUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComboCreateWithoutUserInput, ComboUncheckedCreateWithoutUserInput> | ComboCreateWithoutUserInput[] | ComboUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComboCreateOrConnectWithoutUserInput | ComboCreateOrConnectWithoutUserInput[]
    upsert?: ComboUpsertWithWhereUniqueWithoutUserInput | ComboUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComboCreateManyUserInputEnvelope
    set?: ComboWhereUniqueInput | ComboWhereUniqueInput[]
    disconnect?: ComboWhereUniqueInput | ComboWhereUniqueInput[]
    delete?: ComboWhereUniqueInput | ComboWhereUniqueInput[]
    connect?: ComboWhereUniqueInput | ComboWhereUniqueInput[]
    update?: ComboUpdateWithWhereUniqueWithoutUserInput | ComboUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComboUpdateManyWithWhereWithoutUserInput | ComboUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComboScalarWhereInput | ComboScalarWhereInput[]
  }

  export type CartUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    upsert?: CartUpsertWithoutUserInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput>
  }

  export type DeliveryInfoUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeliveryInfoCreateWithoutUserInput, DeliveryInfoUncheckedCreateWithoutUserInput> | DeliveryInfoCreateWithoutUserInput[] | DeliveryInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryInfoCreateOrConnectWithoutUserInput | DeliveryInfoCreateOrConnectWithoutUserInput[]
    upsert?: DeliveryInfoUpsertWithWhereUniqueWithoutUserInput | DeliveryInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeliveryInfoCreateManyUserInputEnvelope
    set?: DeliveryInfoWhereUniqueInput | DeliveryInfoWhereUniqueInput[]
    disconnect?: DeliveryInfoWhereUniqueInput | DeliveryInfoWhereUniqueInput[]
    delete?: DeliveryInfoWhereUniqueInput | DeliveryInfoWhereUniqueInput[]
    connect?: DeliveryInfoWhereUniqueInput | DeliveryInfoWhereUniqueInput[]
    update?: DeliveryInfoUpdateWithWhereUniqueWithoutUserInput | DeliveryInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeliveryInfoUpdateManyWithWhereWithoutUserInput | DeliveryInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeliveryInfoScalarWhereInput | DeliveryInfoScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderTagUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<OrderTagCreateWithoutCreatedByInput, OrderTagUncheckedCreateWithoutCreatedByInput> | OrderTagCreateWithoutCreatedByInput[] | OrderTagUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderTagCreateOrConnectWithoutCreatedByInput | OrderTagCreateOrConnectWithoutCreatedByInput[]
    upsert?: OrderTagUpsertWithWhereUniqueWithoutCreatedByInput | OrderTagUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: OrderTagCreateManyCreatedByInputEnvelope
    set?: OrderTagWhereUniqueInput | OrderTagWhereUniqueInput[]
    disconnect?: OrderTagWhereUniqueInput | OrderTagWhereUniqueInput[]
    delete?: OrderTagWhereUniqueInput | OrderTagWhereUniqueInput[]
    connect?: OrderTagWhereUniqueInput | OrderTagWhereUniqueInput[]
    update?: OrderTagUpdateWithWhereUniqueWithoutCreatedByInput | OrderTagUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: OrderTagUpdateManyWithWhereWithoutCreatedByInput | OrderTagUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: OrderTagScalarWhereInput | OrderTagScalarWhereInput[]
  }

  export type ComboUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComboCreateWithoutUserInput, ComboUncheckedCreateWithoutUserInput> | ComboCreateWithoutUserInput[] | ComboUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComboCreateOrConnectWithoutUserInput | ComboCreateOrConnectWithoutUserInput[]
    upsert?: ComboUpsertWithWhereUniqueWithoutUserInput | ComboUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComboCreateManyUserInputEnvelope
    set?: ComboWhereUniqueInput | ComboWhereUniqueInput[]
    disconnect?: ComboWhereUniqueInput | ComboWhereUniqueInput[]
    delete?: ComboWhereUniqueInput | ComboWhereUniqueInput[]
    connect?: ComboWhereUniqueInput | ComboWhereUniqueInput[]
    update?: ComboUpdateWithWhereUniqueWithoutUserInput | ComboUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComboUpdateManyWithWhereWithoutUserInput | ComboUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComboScalarWhereInput | ComboScalarWhereInput[]
  }

  export type CartUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    upsert?: CartUpsertWithoutUserInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput>
  }

  export type DeliveryInfoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeliveryInfoCreateWithoutUserInput, DeliveryInfoUncheckedCreateWithoutUserInput> | DeliveryInfoCreateWithoutUserInput[] | DeliveryInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryInfoCreateOrConnectWithoutUserInput | DeliveryInfoCreateOrConnectWithoutUserInput[]
    upsert?: DeliveryInfoUpsertWithWhereUniqueWithoutUserInput | DeliveryInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeliveryInfoCreateManyUserInputEnvelope
    set?: DeliveryInfoWhereUniqueInput | DeliveryInfoWhereUniqueInput[]
    disconnect?: DeliveryInfoWhereUniqueInput | DeliveryInfoWhereUniqueInput[]
    delete?: DeliveryInfoWhereUniqueInput | DeliveryInfoWhereUniqueInput[]
    connect?: DeliveryInfoWhereUniqueInput | DeliveryInfoWhereUniqueInput[]
    update?: DeliveryInfoUpdateWithWhereUniqueWithoutUserInput | DeliveryInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeliveryInfoUpdateManyWithWhereWithoutUserInput | DeliveryInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeliveryInfoScalarWhereInput | DeliveryInfoScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderTagUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<OrderTagCreateWithoutCreatedByInput, OrderTagUncheckedCreateWithoutCreatedByInput> | OrderTagCreateWithoutCreatedByInput[] | OrderTagUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderTagCreateOrConnectWithoutCreatedByInput | OrderTagCreateOrConnectWithoutCreatedByInput[]
    upsert?: OrderTagUpsertWithWhereUniqueWithoutCreatedByInput | OrderTagUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: OrderTagCreateManyCreatedByInputEnvelope
    set?: OrderTagWhereUniqueInput | OrderTagWhereUniqueInput[]
    disconnect?: OrderTagWhereUniqueInput | OrderTagWhereUniqueInput[]
    delete?: OrderTagWhereUniqueInput | OrderTagWhereUniqueInput[]
    connect?: OrderTagWhereUniqueInput | OrderTagWhereUniqueInput[]
    update?: OrderTagUpdateWithWhereUniqueWithoutCreatedByInput | OrderTagUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: OrderTagUpdateManyWithWhereWithoutCreatedByInput | OrderTagUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: OrderTagScalarWhereInput | OrderTagScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ComboItemCreateNestedManyWithoutProductInput = {
    create?: XOR<ComboItemCreateWithoutProductInput, ComboItemUncheckedCreateWithoutProductInput> | ComboItemCreateWithoutProductInput[] | ComboItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ComboItemCreateOrConnectWithoutProductInput | ComboItemCreateOrConnectWithoutProductInput[]
    createMany?: ComboItemCreateManyProductInputEnvelope
    connect?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ComboItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ComboItemCreateWithoutProductInput, ComboItemUncheckedCreateWithoutProductInput> | ComboItemCreateWithoutProductInput[] | ComboItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ComboItemCreateOrConnectWithoutProductInput | ComboItemCreateOrConnectWithoutProductInput[]
    createMany?: ComboItemCreateManyProductInputEnvelope
    connect?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ComboItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<ComboItemCreateWithoutProductInput, ComboItemUncheckedCreateWithoutProductInput> | ComboItemCreateWithoutProductInput[] | ComboItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ComboItemCreateOrConnectWithoutProductInput | ComboItemCreateOrConnectWithoutProductInput[]
    upsert?: ComboItemUpsertWithWhereUniqueWithoutProductInput | ComboItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ComboItemCreateManyProductInputEnvelope
    set?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    disconnect?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    delete?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    connect?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    update?: ComboItemUpdateWithWhereUniqueWithoutProductInput | ComboItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ComboItemUpdateManyWithWhereWithoutProductInput | ComboItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ComboItemScalarWhereInput | ComboItemScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ComboItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ComboItemCreateWithoutProductInput, ComboItemUncheckedCreateWithoutProductInput> | ComboItemCreateWithoutProductInput[] | ComboItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ComboItemCreateOrConnectWithoutProductInput | ComboItemCreateOrConnectWithoutProductInput[]
    upsert?: ComboItemUpsertWithWhereUniqueWithoutProductInput | ComboItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ComboItemCreateManyProductInputEnvelope
    set?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    disconnect?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    delete?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    connect?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    update?: ComboItemUpdateWithWhereUniqueWithoutProductInput | ComboItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ComboItemUpdateManyWithWhereWithoutProductInput | ComboItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ComboItemScalarWhereInput | ComboItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutComboInput = {
    create?: XOR<UserCreateWithoutComboInput, UserUncheckedCreateWithoutComboInput>
    connectOrCreate?: UserCreateOrConnectWithoutComboInput
    connect?: UserWhereUniqueInput
  }

  export type ComboItemCreateNestedManyWithoutComboInput = {
    create?: XOR<ComboItemCreateWithoutComboInput, ComboItemUncheckedCreateWithoutComboInput> | ComboItemCreateWithoutComboInput[] | ComboItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: ComboItemCreateOrConnectWithoutComboInput | ComboItemCreateOrConnectWithoutComboInput[]
    createMany?: ComboItemCreateManyComboInputEnvelope
    connect?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutComboInput = {
    create?: XOR<CartItemCreateWithoutComboInput, CartItemUncheckedCreateWithoutComboInput> | CartItemCreateWithoutComboInput[] | CartItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutComboInput | CartItemCreateOrConnectWithoutComboInput[]
    createMany?: CartItemCreateManyComboInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutComboInput = {
    create?: XOR<OrderItemCreateWithoutComboInput, OrderItemUncheckedCreateWithoutComboInput> | OrderItemCreateWithoutComboInput[] | OrderItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutComboInput | OrderItemCreateOrConnectWithoutComboInput[]
    createMany?: OrderItemCreateManyComboInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ComboItemUncheckedCreateNestedManyWithoutComboInput = {
    create?: XOR<ComboItemCreateWithoutComboInput, ComboItemUncheckedCreateWithoutComboInput> | ComboItemCreateWithoutComboInput[] | ComboItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: ComboItemCreateOrConnectWithoutComboInput | ComboItemCreateOrConnectWithoutComboInput[]
    createMany?: ComboItemCreateManyComboInputEnvelope
    connect?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutComboInput = {
    create?: XOR<CartItemCreateWithoutComboInput, CartItemUncheckedCreateWithoutComboInput> | CartItemCreateWithoutComboInput[] | CartItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutComboInput | CartItemCreateOrConnectWithoutComboInput[]
    createMany?: CartItemCreateManyComboInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutComboInput = {
    create?: XOR<OrderItemCreateWithoutComboInput, OrderItemUncheckedCreateWithoutComboInput> | OrderItemCreateWithoutComboInput[] | OrderItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutComboInput | OrderItemCreateOrConnectWithoutComboInput[]
    createMany?: OrderItemCreateManyComboInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutComboNestedInput = {
    create?: XOR<UserCreateWithoutComboInput, UserUncheckedCreateWithoutComboInput>
    connectOrCreate?: UserCreateOrConnectWithoutComboInput
    upsert?: UserUpsertWithoutComboInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutComboInput, UserUpdateWithoutComboInput>, UserUncheckedUpdateWithoutComboInput>
  }

  export type ComboItemUpdateManyWithoutComboNestedInput = {
    create?: XOR<ComboItemCreateWithoutComboInput, ComboItemUncheckedCreateWithoutComboInput> | ComboItemCreateWithoutComboInput[] | ComboItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: ComboItemCreateOrConnectWithoutComboInput | ComboItemCreateOrConnectWithoutComboInput[]
    upsert?: ComboItemUpsertWithWhereUniqueWithoutComboInput | ComboItemUpsertWithWhereUniqueWithoutComboInput[]
    createMany?: ComboItemCreateManyComboInputEnvelope
    set?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    disconnect?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    delete?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    connect?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    update?: ComboItemUpdateWithWhereUniqueWithoutComboInput | ComboItemUpdateWithWhereUniqueWithoutComboInput[]
    updateMany?: ComboItemUpdateManyWithWhereWithoutComboInput | ComboItemUpdateManyWithWhereWithoutComboInput[]
    deleteMany?: ComboItemScalarWhereInput | ComboItemScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutComboNestedInput = {
    create?: XOR<CartItemCreateWithoutComboInput, CartItemUncheckedCreateWithoutComboInput> | CartItemCreateWithoutComboInput[] | CartItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutComboInput | CartItemCreateOrConnectWithoutComboInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutComboInput | CartItemUpsertWithWhereUniqueWithoutComboInput[]
    createMany?: CartItemCreateManyComboInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutComboInput | CartItemUpdateWithWhereUniqueWithoutComboInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutComboInput | CartItemUpdateManyWithWhereWithoutComboInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutComboNestedInput = {
    create?: XOR<OrderItemCreateWithoutComboInput, OrderItemUncheckedCreateWithoutComboInput> | OrderItemCreateWithoutComboInput[] | OrderItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutComboInput | OrderItemCreateOrConnectWithoutComboInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutComboInput | OrderItemUpsertWithWhereUniqueWithoutComboInput[]
    createMany?: OrderItemCreateManyComboInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutComboInput | OrderItemUpdateWithWhereUniqueWithoutComboInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutComboInput | OrderItemUpdateManyWithWhereWithoutComboInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ComboItemUncheckedUpdateManyWithoutComboNestedInput = {
    create?: XOR<ComboItemCreateWithoutComboInput, ComboItemUncheckedCreateWithoutComboInput> | ComboItemCreateWithoutComboInput[] | ComboItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: ComboItemCreateOrConnectWithoutComboInput | ComboItemCreateOrConnectWithoutComboInput[]
    upsert?: ComboItemUpsertWithWhereUniqueWithoutComboInput | ComboItemUpsertWithWhereUniqueWithoutComboInput[]
    createMany?: ComboItemCreateManyComboInputEnvelope
    set?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    disconnect?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    delete?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    connect?: ComboItemWhereUniqueInput | ComboItemWhereUniqueInput[]
    update?: ComboItemUpdateWithWhereUniqueWithoutComboInput | ComboItemUpdateWithWhereUniqueWithoutComboInput[]
    updateMany?: ComboItemUpdateManyWithWhereWithoutComboInput | ComboItemUpdateManyWithWhereWithoutComboInput[]
    deleteMany?: ComboItemScalarWhereInput | ComboItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutComboNestedInput = {
    create?: XOR<CartItemCreateWithoutComboInput, CartItemUncheckedCreateWithoutComboInput> | CartItemCreateWithoutComboInput[] | CartItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutComboInput | CartItemCreateOrConnectWithoutComboInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutComboInput | CartItemUpsertWithWhereUniqueWithoutComboInput[]
    createMany?: CartItemCreateManyComboInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutComboInput | CartItemUpdateWithWhereUniqueWithoutComboInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutComboInput | CartItemUpdateManyWithWhereWithoutComboInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutComboNestedInput = {
    create?: XOR<OrderItemCreateWithoutComboInput, OrderItemUncheckedCreateWithoutComboInput> | OrderItemCreateWithoutComboInput[] | OrderItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutComboInput | OrderItemCreateOrConnectWithoutComboInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutComboInput | OrderItemUpsertWithWhereUniqueWithoutComboInput[]
    createMany?: OrderItemCreateManyComboInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutComboInput | OrderItemUpdateWithWhereUniqueWithoutComboInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutComboInput | OrderItemUpdateManyWithWhereWithoutComboInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ComboCreateNestedOneWithoutComboItemInput = {
    create?: XOR<ComboCreateWithoutComboItemInput, ComboUncheckedCreateWithoutComboItemInput>
    connectOrCreate?: ComboCreateOrConnectWithoutComboItemInput
    connect?: ComboWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutComboItemInput = {
    create?: XOR<ProductCreateWithoutComboItemInput, ProductUncheckedCreateWithoutComboItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutComboItemInput
    connect?: ProductWhereUniqueInput
  }

  export type ComboUpdateOneRequiredWithoutComboItemNestedInput = {
    create?: XOR<ComboCreateWithoutComboItemInput, ComboUncheckedCreateWithoutComboItemInput>
    connectOrCreate?: ComboCreateOrConnectWithoutComboItemInput
    upsert?: ComboUpsertWithoutComboItemInput
    connect?: ComboWhereUniqueInput
    update?: XOR<XOR<ComboUpdateToOneWithWhereWithoutComboItemInput, ComboUpdateWithoutComboItemInput>, ComboUncheckedUpdateWithoutComboItemInput>
  }

  export type ProductUpdateOneRequiredWithoutComboItemNestedInput = {
    create?: XOR<ProductCreateWithoutComboItemInput, ProductUncheckedCreateWithoutComboItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutComboItemInput
    upsert?: ProductUpsertWithoutComboItemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutComboItemInput, ProductUpdateWithoutComboItemInput>, ProductUncheckedUpdateWithoutComboItemInput>
  }

  export type UserCreateNestedOneWithoutCartInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    connect?: UserWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    upsert?: UserUpsertWithoutCartInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartInput, UserUpdateWithoutCartInput>, UserUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type ComboCreateNestedOneWithoutCartItemInput = {
    create?: XOR<ComboCreateWithoutCartItemInput, ComboUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ComboCreateOrConnectWithoutCartItemInput
    connect?: ComboWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCartItemInput = {
    create?: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemInput
    connect?: ProductWhereUniqueInput
  }

  export type CartCreateNestedOneWithoutCartItemInput = {
    create?: XOR<CartCreateWithoutCartItemInput, CartUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: CartCreateOrConnectWithoutCartItemInput
    connect?: CartWhereUniqueInput
  }

  export type ComboUpdateOneWithoutCartItemNestedInput = {
    create?: XOR<ComboCreateWithoutCartItemInput, ComboUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ComboCreateOrConnectWithoutCartItemInput
    upsert?: ComboUpsertWithoutCartItemInput
    disconnect?: ComboWhereInput | boolean
    delete?: ComboWhereInput | boolean
    connect?: ComboWhereUniqueInput
    update?: XOR<XOR<ComboUpdateToOneWithWhereWithoutCartItemInput, ComboUpdateWithoutCartItemInput>, ComboUncheckedUpdateWithoutCartItemInput>
  }

  export type ProductUpdateOneWithoutCartItemNestedInput = {
    create?: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemInput
    upsert?: ProductUpsertWithoutCartItemInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCartItemInput, ProductUpdateWithoutCartItemInput>, ProductUncheckedUpdateWithoutCartItemInput>
  }

  export type CartUpdateOneRequiredWithoutCartItemNestedInput = {
    create?: XOR<CartCreateWithoutCartItemInput, CartUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: CartCreateOrConnectWithoutCartItemInput
    upsert?: CartUpsertWithoutCartItemInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutCartItemInput, CartUpdateWithoutCartItemInput>, CartUncheckedUpdateWithoutCartItemInput>
  }

  export type UserCreateNestedOneWithoutDeliveryInfoInput = {
    create?: XOR<UserCreateWithoutDeliveryInfoInput, UserUncheckedCreateWithoutDeliveryInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveryInfoInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutDeliveryInput = {
    create?: XOR<OrderCreateWithoutDeliveryInput, OrderUncheckedCreateWithoutDeliveryInput> | OrderCreateWithoutDeliveryInput[] | OrderUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryInput | OrderCreateOrConnectWithoutDeliveryInput[]
    createMany?: OrderCreateManyDeliveryInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutDeliveryInput = {
    create?: XOR<OrderCreateWithoutDeliveryInput, OrderUncheckedCreateWithoutDeliveryInput> | OrderCreateWithoutDeliveryInput[] | OrderUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryInput | OrderCreateOrConnectWithoutDeliveryInput[]
    createMany?: OrderCreateManyDeliveryInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDeliveryInfoNestedInput = {
    create?: XOR<UserCreateWithoutDeliveryInfoInput, UserUncheckedCreateWithoutDeliveryInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveryInfoInput
    upsert?: UserUpsertWithoutDeliveryInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeliveryInfoInput, UserUpdateWithoutDeliveryInfoInput>, UserUncheckedUpdateWithoutDeliveryInfoInput>
  }

  export type OrderUpdateManyWithoutDeliveryNestedInput = {
    create?: XOR<OrderCreateWithoutDeliveryInput, OrderUncheckedCreateWithoutDeliveryInput> | OrderCreateWithoutDeliveryInput[] | OrderUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryInput | OrderCreateOrConnectWithoutDeliveryInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDeliveryInput | OrderUpsertWithWhereUniqueWithoutDeliveryInput[]
    createMany?: OrderCreateManyDeliveryInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDeliveryInput | OrderUpdateWithWhereUniqueWithoutDeliveryInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDeliveryInput | OrderUpdateManyWithWhereWithoutDeliveryInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutDeliveryNestedInput = {
    create?: XOR<OrderCreateWithoutDeliveryInput, OrderUncheckedCreateWithoutDeliveryInput> | OrderCreateWithoutDeliveryInput[] | OrderUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryInput | OrderCreateOrConnectWithoutDeliveryInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDeliveryInput | OrderUpsertWithWhereUniqueWithoutDeliveryInput[]
    createMany?: OrderCreateManyDeliveryInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDeliveryInput | OrderUpdateWithWhereUniqueWithoutDeliveryInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDeliveryInput | OrderUpdateManyWithWhereWithoutDeliveryInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrderTagInput = {
    create?: XOR<UserCreateWithoutOrderTagInput, UserUncheckedCreateWithoutOrderTagInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderTagInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutTagInput = {
    create?: XOR<OrderCreateWithoutTagInput, OrderUncheckedCreateWithoutTagInput> | OrderCreateWithoutTagInput[] | OrderUncheckedCreateWithoutTagInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTagInput | OrderCreateOrConnectWithoutTagInput[]
    createMany?: OrderCreateManyTagInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<OrderCreateWithoutTagInput, OrderUncheckedCreateWithoutTagInput> | OrderCreateWithoutTagInput[] | OrderUncheckedCreateWithoutTagInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTagInput | OrderCreateOrConnectWithoutTagInput[]
    createMany?: OrderCreateManyTagInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutOrderTagNestedInput = {
    create?: XOR<UserCreateWithoutOrderTagInput, UserUncheckedCreateWithoutOrderTagInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderTagInput
    upsert?: UserUpsertWithoutOrderTagInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderTagInput, UserUpdateWithoutOrderTagInput>, UserUncheckedUpdateWithoutOrderTagInput>
  }

  export type OrderUpdateManyWithoutTagNestedInput = {
    create?: XOR<OrderCreateWithoutTagInput, OrderUncheckedCreateWithoutTagInput> | OrderCreateWithoutTagInput[] | OrderUncheckedCreateWithoutTagInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTagInput | OrderCreateOrConnectWithoutTagInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTagInput | OrderUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: OrderCreateManyTagInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTagInput | OrderUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTagInput | OrderUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<OrderCreateWithoutTagInput, OrderUncheckedCreateWithoutTagInput> | OrderCreateWithoutTagInput[] | OrderUncheckedCreateWithoutTagInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTagInput | OrderCreateOrConnectWithoutTagInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTagInput | OrderUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: OrderCreateManyTagInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTagInput | OrderUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTagInput | OrderUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutWrapInput = {
    create?: XOR<OrderCreateWithoutWrapInput, OrderUncheckedCreateWithoutWrapInput> | OrderCreateWithoutWrapInput[] | OrderUncheckedCreateWithoutWrapInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutWrapInput | OrderCreateOrConnectWithoutWrapInput[]
    createMany?: OrderCreateManyWrapInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutWrapInput = {
    create?: XOR<OrderCreateWithoutWrapInput, OrderUncheckedCreateWithoutWrapInput> | OrderCreateWithoutWrapInput[] | OrderUncheckedCreateWithoutWrapInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutWrapInput | OrderCreateOrConnectWithoutWrapInput[]
    createMany?: OrderCreateManyWrapInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutWrapNestedInput = {
    create?: XOR<OrderCreateWithoutWrapInput, OrderUncheckedCreateWithoutWrapInput> | OrderCreateWithoutWrapInput[] | OrderUncheckedCreateWithoutWrapInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutWrapInput | OrderCreateOrConnectWithoutWrapInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutWrapInput | OrderUpsertWithWhereUniqueWithoutWrapInput[]
    createMany?: OrderCreateManyWrapInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutWrapInput | OrderUpdateWithWhereUniqueWithoutWrapInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutWrapInput | OrderUpdateManyWithWhereWithoutWrapInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutWrapNestedInput = {
    create?: XOR<OrderCreateWithoutWrapInput, OrderUncheckedCreateWithoutWrapInput> | OrderCreateWithoutWrapInput[] | OrderUncheckedCreateWithoutWrapInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutWrapInput | OrderCreateOrConnectWithoutWrapInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutWrapInput | OrderUpsertWithWhereUniqueWithoutWrapInput[]
    createMany?: OrderCreateManyWrapInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutWrapInput | OrderUpdateWithWhereUniqueWithoutWrapInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutWrapInput | OrderUpdateManyWithWhereWithoutWrapInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutPreferenceInput = {
    create?: XOR<OrderCreateWithoutPreferenceInput, OrderUncheckedCreateWithoutPreferenceInput> | OrderCreateWithoutPreferenceInput[] | OrderUncheckedCreateWithoutPreferenceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPreferenceInput | OrderCreateOrConnectWithoutPreferenceInput[]
    createMany?: OrderCreateManyPreferenceInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutPreferenceInput = {
    create?: XOR<OrderCreateWithoutPreferenceInput, OrderUncheckedCreateWithoutPreferenceInput> | OrderCreateWithoutPreferenceInput[] | OrderUncheckedCreateWithoutPreferenceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPreferenceInput | OrderCreateOrConnectWithoutPreferenceInput[]
    createMany?: OrderCreateManyPreferenceInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EnumPreferenceFieldUpdateOperationsInput = {
    set?: $Enums.Preference
  }

  export type OrderUpdateManyWithoutPreferenceNestedInput = {
    create?: XOR<OrderCreateWithoutPreferenceInput, OrderUncheckedCreateWithoutPreferenceInput> | OrderCreateWithoutPreferenceInput[] | OrderUncheckedCreateWithoutPreferenceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPreferenceInput | OrderCreateOrConnectWithoutPreferenceInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPreferenceInput | OrderUpsertWithWhereUniqueWithoutPreferenceInput[]
    createMany?: OrderCreateManyPreferenceInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPreferenceInput | OrderUpdateWithWhereUniqueWithoutPreferenceInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPreferenceInput | OrderUpdateManyWithWhereWithoutPreferenceInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutPreferenceNestedInput = {
    create?: XOR<OrderCreateWithoutPreferenceInput, OrderUncheckedCreateWithoutPreferenceInput> | OrderCreateWithoutPreferenceInput[] | OrderUncheckedCreateWithoutPreferenceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPreferenceInput | OrderCreateOrConnectWithoutPreferenceInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPreferenceInput | OrderUpsertWithWhereUniqueWithoutPreferenceInput[]
    createMany?: OrderCreateManyPreferenceInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPreferenceInput | OrderUpdateWithWhereUniqueWithoutPreferenceInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPreferenceInput | OrderUpdateManyWithWhereWithoutPreferenceInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrderInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    connect?: UserWhereUniqueInput
  }

  export type DeliveryInfoCreateNestedOneWithoutOrderInput = {
    create?: XOR<DeliveryInfoCreateWithoutOrderInput, DeliveryInfoUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DeliveryInfoCreateOrConnectWithoutOrderInput
    connect?: DeliveryInfoWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderTagCreateNestedOneWithoutOrdersInput = {
    create?: XOR<OrderTagCreateWithoutOrdersInput, OrderTagUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OrderTagCreateOrConnectWithoutOrdersInput
    connect?: OrderTagWhereUniqueInput
  }

  export type WrapCreateNestedOneWithoutOrdersInput = {
    create?: XOR<WrapCreateWithoutOrdersInput, WrapUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: WrapCreateOrConnectWithoutOrdersInput
    connect?: WrapWhereUniqueInput
  }

  export type PreferencePriceCreateNestedOneWithoutOrdersInput = {
    create?: XOR<PreferencePriceCreateWithoutOrdersInput, PreferencePriceUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PreferencePriceCreateOrConnectWithoutOrdersInput
    connect?: PreferencePriceWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    upsert?: UserUpsertWithoutOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderInput, UserUpdateWithoutOrderInput>, UserUncheckedUpdateWithoutOrderInput>
  }

  export type DeliveryInfoUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<DeliveryInfoCreateWithoutOrderInput, DeliveryInfoUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DeliveryInfoCreateOrConnectWithoutOrderInput
    upsert?: DeliveryInfoUpsertWithoutOrderInput
    connect?: DeliveryInfoWhereUniqueInput
    update?: XOR<XOR<DeliveryInfoUpdateToOneWithWhereWithoutOrderInput, DeliveryInfoUpdateWithoutOrderInput>, DeliveryInfoUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderTagUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<OrderTagCreateWithoutOrdersInput, OrderTagUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OrderTagCreateOrConnectWithoutOrdersInput
    upsert?: OrderTagUpsertWithoutOrdersInput
    connect?: OrderTagWhereUniqueInput
    update?: XOR<XOR<OrderTagUpdateToOneWithWhereWithoutOrdersInput, OrderTagUpdateWithoutOrdersInput>, OrderTagUncheckedUpdateWithoutOrdersInput>
  }

  export type WrapUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<WrapCreateWithoutOrdersInput, WrapUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: WrapCreateOrConnectWithoutOrdersInput
    upsert?: WrapUpsertWithoutOrdersInput
    connect?: WrapWhereUniqueInput
    update?: XOR<XOR<WrapUpdateToOneWithWhereWithoutOrdersInput, WrapUpdateWithoutOrdersInput>, WrapUncheckedUpdateWithoutOrdersInput>
  }

  export type PreferencePriceUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<PreferencePriceCreateWithoutOrdersInput, PreferencePriceUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PreferencePriceCreateOrConnectWithoutOrdersInput
    upsert?: PreferencePriceUpsertWithoutOrdersInput
    connect?: PreferencePriceWhereUniqueInput
    update?: XOR<XOR<PreferencePriceUpdateToOneWithWhereWithoutOrdersInput, PreferencePriceUpdateWithoutOrdersInput>, PreferencePriceUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ComboCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<ComboCreateWithoutOrderItemInput, ComboUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ComboCreateOrConnectWithoutOrderItemInput
    connect?: ComboWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ComboUpdateOneWithoutOrderItemNestedInput = {
    create?: XOR<ComboCreateWithoutOrderItemInput, ComboUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ComboCreateOrConnectWithoutOrderItemInput
    upsert?: ComboUpsertWithoutOrderItemInput
    disconnect?: ComboWhereInput | boolean
    delete?: ComboWhereInput | boolean
    connect?: ComboWhereUniqueInput
    update?: XOR<XOR<ComboUpdateToOneWithWhereWithoutOrderItemInput, ComboUpdateWithoutOrderItemInput>, ComboUncheckedUpdateWithoutOrderItemInput>
  }

  export type ProductUpdateOneWithoutOrderItemNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput
    upsert?: ProductUpsertWithoutOrderItemInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemInput, ProductUpdateWithoutOrderItemInput>, ProductUncheckedUpdateWithoutOrderItemInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.Preference | EnumPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.Preference[] | ListEnumPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Preference[] | ListEnumPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferenceFilter<$PrismaModel> | $Enums.Preference
  }

  export type NestedEnumPreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Preference | EnumPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.Preference[] | ListEnumPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Preference[] | ListEnumPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferenceWithAggregatesFilter<$PrismaModel> | $Enums.Preference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPreferenceFilter<$PrismaModel>
    _max?: NestedEnumPreferenceFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type ComboCreateWithoutUserInput = {
    id?: string
    name: string
    totalPrice?: number | null
    discountAmount?: number | null
    perUnitPrice?: number | null
    perUnitDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comboItem?: ComboItemCreateNestedManyWithoutComboInput
    cartItem?: CartItemCreateNestedManyWithoutComboInput
    orderItem?: OrderItemCreateNestedManyWithoutComboInput
  }

  export type ComboUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    totalPrice?: number | null
    discountAmount?: number | null
    perUnitPrice?: number | null
    perUnitDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comboItem?: ComboItemUncheckedCreateNestedManyWithoutComboInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutComboInput
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutComboInput
  }

  export type ComboCreateOrConnectWithoutUserInput = {
    where: ComboWhereUniqueInput
    create: XOR<ComboCreateWithoutUserInput, ComboUncheckedCreateWithoutUserInput>
  }

  export type ComboCreateManyUserInputEnvelope = {
    data: ComboCreateManyUserInput | ComboCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItem?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type DeliveryInfoCreateWithoutUserInput = {
    id?: string
    name: string
    contact: string
    addressLine: string
    city: string
    state: string
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: OrderCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryInfoUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    contact: string
    addressLine: string
    city: string
    state: string
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: OrderUncheckedCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryInfoCreateOrConnectWithoutUserInput = {
    where: DeliveryInfoWhereUniqueInput
    create: XOR<DeliveryInfoCreateWithoutUserInput, DeliveryInfoUncheckedCreateWithoutUserInput>
  }

  export type DeliveryInfoCreateManyUserInputEnvelope = {
    data: DeliveryInfoCreateManyUserInput | DeliveryInfoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery: DeliveryInfoCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    tag: OrderTagCreateNestedOneWithoutOrdersInput
    wrap: WrapCreateNestedOneWithoutOrdersInput
    preference: PreferencePriceCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    deliveryId: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    orderTagId: string
    wrapId: string
    preferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderTagCreateWithoutCreatedByInput = {
    id?: string
    name: string
    isPublic?: boolean
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutTagInput
  }

  export type OrderTagUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    isPublic?: boolean
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutTagInput
  }

  export type OrderTagCreateOrConnectWithoutCreatedByInput = {
    where: OrderTagWhereUniqueInput
    create: XOR<OrderTagCreateWithoutCreatedByInput, OrderTagUncheckedCreateWithoutCreatedByInput>
  }

  export type OrderTagCreateManyCreatedByInputEnvelope = {
    data: OrderTagCreateManyCreatedByInput | OrderTagCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ComboUpsertWithWhereUniqueWithoutUserInput = {
    where: ComboWhereUniqueInput
    update: XOR<ComboUpdateWithoutUserInput, ComboUncheckedUpdateWithoutUserInput>
    create: XOR<ComboCreateWithoutUserInput, ComboUncheckedCreateWithoutUserInput>
  }

  export type ComboUpdateWithWhereUniqueWithoutUserInput = {
    where: ComboWhereUniqueInput
    data: XOR<ComboUpdateWithoutUserInput, ComboUncheckedUpdateWithoutUserInput>
  }

  export type ComboUpdateManyWithWhereWithoutUserInput = {
    where: ComboScalarWhereInput
    data: XOR<ComboUpdateManyMutationInput, ComboUncheckedUpdateManyWithoutUserInput>
  }

  export type ComboScalarWhereInput = {
    AND?: ComboScalarWhereInput | ComboScalarWhereInput[]
    OR?: ComboScalarWhereInput[]
    NOT?: ComboScalarWhereInput | ComboScalarWhereInput[]
    id?: StringFilter<"Combo"> | string
    name?: StringFilter<"Combo"> | string
    userId?: StringNullableFilter<"Combo"> | string | null
    totalPrice?: FloatNullableFilter<"Combo"> | number | null
    discountAmount?: FloatNullableFilter<"Combo"> | number | null
    perUnitPrice?: FloatNullableFilter<"Combo"> | number | null
    perUnitDiscount?: FloatNullableFilter<"Combo"> | number | null
    createdAt?: DateTimeFilter<"Combo"> | Date | string
    updatedAt?: DateTimeFilter<"Combo"> | Date | string
  }

  export type CartUpsertWithoutUserInput = {
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutUserInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type DeliveryInfoUpsertWithWhereUniqueWithoutUserInput = {
    where: DeliveryInfoWhereUniqueInput
    update: XOR<DeliveryInfoUpdateWithoutUserInput, DeliveryInfoUncheckedUpdateWithoutUserInput>
    create: XOR<DeliveryInfoCreateWithoutUserInput, DeliveryInfoUncheckedCreateWithoutUserInput>
  }

  export type DeliveryInfoUpdateWithWhereUniqueWithoutUserInput = {
    where: DeliveryInfoWhereUniqueInput
    data: XOR<DeliveryInfoUpdateWithoutUserInput, DeliveryInfoUncheckedUpdateWithoutUserInput>
  }

  export type DeliveryInfoUpdateManyWithWhereWithoutUserInput = {
    where: DeliveryInfoScalarWhereInput
    data: XOR<DeliveryInfoUpdateManyMutationInput, DeliveryInfoUncheckedUpdateManyWithoutUserInput>
  }

  export type DeliveryInfoScalarWhereInput = {
    AND?: DeliveryInfoScalarWhereInput | DeliveryInfoScalarWhereInput[]
    OR?: DeliveryInfoScalarWhereInput[]
    NOT?: DeliveryInfoScalarWhereInput | DeliveryInfoScalarWhereInput[]
    id?: StringFilter<"DeliveryInfo"> | string
    userId?: StringFilter<"DeliveryInfo"> | string
    name?: StringFilter<"DeliveryInfo"> | string
    contact?: StringFilter<"DeliveryInfo"> | string
    addressLine?: StringFilter<"DeliveryInfo"> | string
    city?: StringFilter<"DeliveryInfo"> | string
    state?: StringFilter<"DeliveryInfo"> | string
    postalCode?: StringFilter<"DeliveryInfo"> | string
    country?: StringFilter<"DeliveryInfo"> | string
    createdAt?: DateTimeFilter<"DeliveryInfo"> | Date | string
    updatedAt?: DateTimeFilter<"DeliveryInfo"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    deliveryId?: StringFilter<"Order"> | string
    deliveryCharge?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalPrice?: IntFilter<"Order"> | number
    razorpayOrderId?: StringNullableFilter<"Order"> | string | null
    paymentStatus?: StringNullableFilter<"Order"> | string | null
    orderTagId?: StringFilter<"Order"> | string
    wrapId?: StringFilter<"Order"> | string
    preferenceId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type OrderTagUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: OrderTagWhereUniqueInput
    update: XOR<OrderTagUpdateWithoutCreatedByInput, OrderTagUncheckedUpdateWithoutCreatedByInput>
    create: XOR<OrderTagCreateWithoutCreatedByInput, OrderTagUncheckedCreateWithoutCreatedByInput>
  }

  export type OrderTagUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: OrderTagWhereUniqueInput
    data: XOR<OrderTagUpdateWithoutCreatedByInput, OrderTagUncheckedUpdateWithoutCreatedByInput>
  }

  export type OrderTagUpdateManyWithWhereWithoutCreatedByInput = {
    where: OrderTagScalarWhereInput
    data: XOR<OrderTagUpdateManyMutationInput, OrderTagUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type OrderTagScalarWhereInput = {
    AND?: OrderTagScalarWhereInput | OrderTagScalarWhereInput[]
    OR?: OrderTagScalarWhereInput[]
    NOT?: OrderTagScalarWhereInput | OrderTagScalarWhereInput[]
    id?: StringFilter<"OrderTag"> | string
    name?: StringFilter<"OrderTag"> | string
    isPublic?: BoolFilter<"OrderTag"> | boolean
    price?: IntFilter<"OrderTag"> | number
    userId?: StringFilter<"OrderTag"> | string
    createdAt?: DateTimeFilter<"OrderTag"> | Date | string
    updatedAt?: DateTimeFilter<"OrderTag"> | Date | string
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ComboItemCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    combo: ComboCreateNestedOneWithoutComboItemInput
  }

  export type ComboItemUncheckedCreateWithoutProductInput = {
    id?: string
    comboId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComboItemCreateOrConnectWithoutProductInput = {
    where: ComboItemWhereUniqueInput
    create: XOR<ComboItemCreateWithoutProductInput, ComboItemUncheckedCreateWithoutProductInput>
  }

  export type ComboItemCreateManyProductInputEnvelope = {
    data: ComboItemCreateManyProductInput | ComboItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutProductInput = {
    id?: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    combo?: ComboCreateNestedOneWithoutCartItemInput
    cart: CartCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutProductInput = {
    id?: string
    comboId?: string | null
    cartId: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemCreateManyProductInputEnvelope = {
    data: CartItemCreateManyProductInput | CartItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutProductInput = {
    id?: string
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    combo?: ComboCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: string
    orderId: string
    comboId?: string | null
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ComboItemUpsertWithWhereUniqueWithoutProductInput = {
    where: ComboItemWhereUniqueInput
    update: XOR<ComboItemUpdateWithoutProductInput, ComboItemUncheckedUpdateWithoutProductInput>
    create: XOR<ComboItemCreateWithoutProductInput, ComboItemUncheckedCreateWithoutProductInput>
  }

  export type ComboItemUpdateWithWhereUniqueWithoutProductInput = {
    where: ComboItemWhereUniqueInput
    data: XOR<ComboItemUpdateWithoutProductInput, ComboItemUncheckedUpdateWithoutProductInput>
  }

  export type ComboItemUpdateManyWithWhereWithoutProductInput = {
    where: ComboItemScalarWhereInput
    data: XOR<ComboItemUpdateManyMutationInput, ComboItemUncheckedUpdateManyWithoutProductInput>
  }

  export type ComboItemScalarWhereInput = {
    AND?: ComboItemScalarWhereInput | ComboItemScalarWhereInput[]
    OR?: ComboItemScalarWhereInput[]
    NOT?: ComboItemScalarWhereInput | ComboItemScalarWhereInput[]
    id?: StringFilter<"ComboItem"> | string
    comboId?: StringFilter<"ComboItem"> | string
    productId?: StringFilter<"ComboItem"> | string
    createdAt?: DateTimeFilter<"ComboItem"> | Date | string
    updatedAt?: DateTimeFilter<"ComboItem"> | Date | string
  }

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutProductInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: StringFilter<"CartItem"> | string
    comboId?: StringNullableFilter<"CartItem"> | string | null
    productId?: StringNullableFilter<"CartItem"> | string | null
    cartId?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    comboId?: StringNullableFilter<"OrderItem"> | string | null
    productId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    price?: IntFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comboItem?: ComboItemCreateNestedManyWithoutProductInput
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    orderItem?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comboItem?: ComboItemUncheckedCreateNestedManyWithoutProductInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    imageUrl?: StringFilter<"Product"> | string
    stock?: IntFilter<"Product"> | number
    categoryId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type UserCreateWithoutComboInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    cart?: CartCreateNestedOneWithoutUserInput
    deliveryInfo?: DeliveryInfoCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutUserInput
    orderTag?: OrderTagCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutComboInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
    deliveryInfo?: DeliveryInfoUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutUserInput
    orderTag?: OrderTagUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutComboInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutComboInput, UserUncheckedCreateWithoutComboInput>
  }

  export type ComboItemCreateWithoutComboInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutComboItemInput
  }

  export type ComboItemUncheckedCreateWithoutComboInput = {
    id?: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComboItemCreateOrConnectWithoutComboInput = {
    where: ComboItemWhereUniqueInput
    create: XOR<ComboItemCreateWithoutComboInput, ComboItemUncheckedCreateWithoutComboInput>
  }

  export type ComboItemCreateManyComboInputEnvelope = {
    data: ComboItemCreateManyComboInput | ComboItemCreateManyComboInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutComboInput = {
    id?: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedOneWithoutCartItemInput
    cart: CartCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutComboInput = {
    id?: string
    productId?: string | null
    cartId: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutComboInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutComboInput, CartItemUncheckedCreateWithoutComboInput>
  }

  export type CartItemCreateManyComboInputEnvelope = {
    data: CartItemCreateManyComboInput | CartItemCreateManyComboInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutComboInput = {
    id?: string
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    product?: ProductCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutComboInput = {
    id?: string
    orderId: string
    productId?: string | null
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutComboInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutComboInput, OrderItemUncheckedCreateWithoutComboInput>
  }

  export type OrderItemCreateManyComboInputEnvelope = {
    data: OrderItemCreateManyComboInput | OrderItemCreateManyComboInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutComboInput = {
    update: XOR<UserUpdateWithoutComboInput, UserUncheckedUpdateWithoutComboInput>
    create: XOR<UserCreateWithoutComboInput, UserUncheckedCreateWithoutComboInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutComboInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutComboInput, UserUncheckedUpdateWithoutComboInput>
  }

  export type UserUpdateWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cart?: CartUpdateOneWithoutUserNestedInput
    deliveryInfo?: DeliveryInfoUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutUserNestedInput
    orderTag?: OrderTagUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
    deliveryInfo?: DeliveryInfoUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    orderTag?: OrderTagUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ComboItemUpsertWithWhereUniqueWithoutComboInput = {
    where: ComboItemWhereUniqueInput
    update: XOR<ComboItemUpdateWithoutComboInput, ComboItemUncheckedUpdateWithoutComboInput>
    create: XOR<ComboItemCreateWithoutComboInput, ComboItemUncheckedCreateWithoutComboInput>
  }

  export type ComboItemUpdateWithWhereUniqueWithoutComboInput = {
    where: ComboItemWhereUniqueInput
    data: XOR<ComboItemUpdateWithoutComboInput, ComboItemUncheckedUpdateWithoutComboInput>
  }

  export type ComboItemUpdateManyWithWhereWithoutComboInput = {
    where: ComboItemScalarWhereInput
    data: XOR<ComboItemUpdateManyMutationInput, ComboItemUncheckedUpdateManyWithoutComboInput>
  }

  export type CartItemUpsertWithWhereUniqueWithoutComboInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutComboInput, CartItemUncheckedUpdateWithoutComboInput>
    create: XOR<CartItemCreateWithoutComboInput, CartItemUncheckedCreateWithoutComboInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutComboInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutComboInput, CartItemUncheckedUpdateWithoutComboInput>
  }

  export type CartItemUpdateManyWithWhereWithoutComboInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutComboInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutComboInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutComboInput, OrderItemUncheckedUpdateWithoutComboInput>
    create: XOR<OrderItemCreateWithoutComboInput, OrderItemUncheckedCreateWithoutComboInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutComboInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutComboInput, OrderItemUncheckedUpdateWithoutComboInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutComboInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutComboInput>
  }

  export type ComboCreateWithoutComboItemInput = {
    id?: string
    name: string
    totalPrice?: number | null
    discountAmount?: number | null
    perUnitPrice?: number | null
    perUnitDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutComboInput
    cartItem?: CartItemCreateNestedManyWithoutComboInput
    orderItem?: OrderItemCreateNestedManyWithoutComboInput
  }

  export type ComboUncheckedCreateWithoutComboItemInput = {
    id?: string
    name: string
    userId?: string | null
    totalPrice?: number | null
    discountAmount?: number | null
    perUnitPrice?: number | null
    perUnitDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutComboInput
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutComboInput
  }

  export type ComboCreateOrConnectWithoutComboItemInput = {
    where: ComboWhereUniqueInput
    create: XOR<ComboCreateWithoutComboItemInput, ComboUncheckedCreateWithoutComboItemInput>
  }

  export type ProductCreateWithoutComboItemInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    orderItem?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutComboItemInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    stock: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutComboItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutComboItemInput, ProductUncheckedCreateWithoutComboItemInput>
  }

  export type ComboUpsertWithoutComboItemInput = {
    update: XOR<ComboUpdateWithoutComboItemInput, ComboUncheckedUpdateWithoutComboItemInput>
    create: XOR<ComboCreateWithoutComboItemInput, ComboUncheckedCreateWithoutComboItemInput>
    where?: ComboWhereInput
  }

  export type ComboUpdateToOneWithWhereWithoutComboItemInput = {
    where?: ComboWhereInput
    data: XOR<ComboUpdateWithoutComboItemInput, ComboUncheckedUpdateWithoutComboItemInput>
  }

  export type ComboUpdateWithoutComboItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutComboNestedInput
    cartItem?: CartItemUpdateManyWithoutComboNestedInput
    orderItem?: OrderItemUpdateManyWithoutComboNestedInput
  }

  export type ComboUncheckedUpdateWithoutComboItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutComboNestedInput
    orderItem?: OrderItemUncheckedUpdateManyWithoutComboNestedInput
  }

  export type ProductUpsertWithoutComboItemInput = {
    update: XOR<ProductUpdateWithoutComboItemInput, ProductUncheckedUpdateWithoutComboItemInput>
    create: XOR<ProductCreateWithoutComboItemInput, ProductUncheckedCreateWithoutComboItemInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutComboItemInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutComboItemInput, ProductUncheckedUpdateWithoutComboItemInput>
  }

  export type ProductUpdateWithoutComboItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutComboItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutCartInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    combo?: ComboCreateNestedManyWithoutUserInput
    deliveryInfo?: DeliveryInfoCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutUserInput
    orderTag?: OrderTagCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCartInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    combo?: ComboUncheckedCreateNestedManyWithoutUserInput
    deliveryInfo?: DeliveryInfoUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutUserInput
    orderTag?: OrderTagUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateWithoutCartInput = {
    id?: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    combo?: ComboCreateNestedOneWithoutCartItemInput
    product?: ProductCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    id?: string
    comboId?: string | null
    productId?: string | null
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCartInput = {
    update: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
  }

  export type UserUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    combo?: ComboUpdateManyWithoutUserNestedInput
    deliveryInfo?: DeliveryInfoUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutUserNestedInput
    orderTag?: OrderTagUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    combo?: ComboUncheckedUpdateManyWithoutUserNestedInput
    deliveryInfo?: DeliveryInfoUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    orderTag?: OrderTagUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type ComboCreateWithoutCartItemInput = {
    id?: string
    name: string
    totalPrice?: number | null
    discountAmount?: number | null
    perUnitPrice?: number | null
    perUnitDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutComboInput
    comboItem?: ComboItemCreateNestedManyWithoutComboInput
    orderItem?: OrderItemCreateNestedManyWithoutComboInput
  }

  export type ComboUncheckedCreateWithoutCartItemInput = {
    id?: string
    name: string
    userId?: string | null
    totalPrice?: number | null
    discountAmount?: number | null
    perUnitPrice?: number | null
    perUnitDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comboItem?: ComboItemUncheckedCreateNestedManyWithoutComboInput
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutComboInput
  }

  export type ComboCreateOrConnectWithoutCartItemInput = {
    where: ComboWhereUniqueInput
    create: XOR<ComboCreateWithoutCartItemInput, ComboUncheckedCreateWithoutCartItemInput>
  }

  export type ProductCreateWithoutCartItemInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    comboItem?: ComboItemCreateNestedManyWithoutProductInput
    orderItem?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCartItemInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    stock: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comboItem?: ComboItemUncheckedCreateNestedManyWithoutProductInput
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCartItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
  }

  export type CartCreateWithoutCartItemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutCartItemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartCreateOrConnectWithoutCartItemInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutCartItemInput, CartUncheckedCreateWithoutCartItemInput>
  }

  export type ComboUpsertWithoutCartItemInput = {
    update: XOR<ComboUpdateWithoutCartItemInput, ComboUncheckedUpdateWithoutCartItemInput>
    create: XOR<ComboCreateWithoutCartItemInput, ComboUncheckedCreateWithoutCartItemInput>
    where?: ComboWhereInput
  }

  export type ComboUpdateToOneWithWhereWithoutCartItemInput = {
    where?: ComboWhereInput
    data: XOR<ComboUpdateWithoutCartItemInput, ComboUncheckedUpdateWithoutCartItemInput>
  }

  export type ComboUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutComboNestedInput
    comboItem?: ComboItemUpdateManyWithoutComboNestedInput
    orderItem?: OrderItemUpdateManyWithoutComboNestedInput
  }

  export type ComboUncheckedUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comboItem?: ComboItemUncheckedUpdateManyWithoutComboNestedInput
    orderItem?: OrderItemUncheckedUpdateManyWithoutComboNestedInput
  }

  export type ProductUpsertWithoutCartItemInput = {
    update: XOR<ProductUpdateWithoutCartItemInput, ProductUncheckedUpdateWithoutCartItemInput>
    create: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCartItemInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCartItemInput, ProductUncheckedUpdateWithoutCartItemInput>
  }

  export type ProductUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    comboItem?: ComboItemUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comboItem?: ComboItemUncheckedUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CartUpsertWithoutCartItemInput = {
    update: XOR<CartUpdateWithoutCartItemInput, CartUncheckedUpdateWithoutCartItemInput>
    create: XOR<CartCreateWithoutCartItemInput, CartUncheckedCreateWithoutCartItemInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutCartItemInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutCartItemInput, CartUncheckedUpdateWithoutCartItemInput>
  }

  export type CartUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutDeliveryInfoInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    combo?: ComboCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutUserInput
    order?: OrderCreateNestedManyWithoutUserInput
    orderTag?: OrderTagCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDeliveryInfoInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    combo?: ComboUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutUserInput
    orderTag?: OrderTagUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDeliveryInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeliveryInfoInput, UserUncheckedCreateWithoutDeliveryInfoInput>
  }

  export type OrderCreateWithoutDeliveryInput = {
    id?: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    tag: OrderTagCreateNestedOneWithoutOrdersInput
    wrap: WrapCreateNestedOneWithoutOrdersInput
    preference: PreferencePriceCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutDeliveryInput = {
    id?: string
    userId: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    orderTagId: string
    wrapId: string
    preferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutDeliveryInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDeliveryInput, OrderUncheckedCreateWithoutDeliveryInput>
  }

  export type OrderCreateManyDeliveryInputEnvelope = {
    data: OrderCreateManyDeliveryInput | OrderCreateManyDeliveryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDeliveryInfoInput = {
    update: XOR<UserUpdateWithoutDeliveryInfoInput, UserUncheckedUpdateWithoutDeliveryInfoInput>
    create: XOR<UserCreateWithoutDeliveryInfoInput, UserUncheckedCreateWithoutDeliveryInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeliveryInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeliveryInfoInput, UserUncheckedUpdateWithoutDeliveryInfoInput>
  }

  export type UserUpdateWithoutDeliveryInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    combo?: ComboUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutUserNestedInput
    order?: OrderUpdateManyWithoutUserNestedInput
    orderTag?: OrderTagUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDeliveryInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    combo?: ComboUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    orderTag?: OrderTagUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutDeliveryInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutDeliveryInput, OrderUncheckedUpdateWithoutDeliveryInput>
    create: XOR<OrderCreateWithoutDeliveryInput, OrderUncheckedCreateWithoutDeliveryInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutDeliveryInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutDeliveryInput, OrderUncheckedUpdateWithoutDeliveryInput>
  }

  export type OrderUpdateManyWithWhereWithoutDeliveryInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutDeliveryInput>
  }

  export type UserCreateWithoutOrderTagInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    combo?: ComboCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutUserInput
    deliveryInfo?: DeliveryInfoCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderTagInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    combo?: ComboUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
    deliveryInfo?: DeliveryInfoUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderTagInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderTagInput, UserUncheckedCreateWithoutOrderTagInput>
  }

  export type OrderCreateWithoutTagInput = {
    id?: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrderInput
    delivery: DeliveryInfoCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    wrap: WrapCreateNestedOneWithoutOrdersInput
    preference: PreferencePriceCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutTagInput = {
    id?: string
    userId: string
    deliveryId: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    wrapId: string
    preferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTagInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTagInput, OrderUncheckedCreateWithoutTagInput>
  }

  export type OrderCreateManyTagInputEnvelope = {
    data: OrderCreateManyTagInput | OrderCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrderTagInput = {
    update: XOR<UserUpdateWithoutOrderTagInput, UserUncheckedUpdateWithoutOrderTagInput>
    create: XOR<UserCreateWithoutOrderTagInput, UserUncheckedCreateWithoutOrderTagInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderTagInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderTagInput, UserUncheckedUpdateWithoutOrderTagInput>
  }

  export type UserUpdateWithoutOrderTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    combo?: ComboUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutUserNestedInput
    deliveryInfo?: DeliveryInfoUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    combo?: ComboUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
    deliveryInfo?: DeliveryInfoUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutTagInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutTagInput, OrderUncheckedUpdateWithoutTagInput>
    create: XOR<OrderCreateWithoutTagInput, OrderUncheckedCreateWithoutTagInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutTagInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutTagInput, OrderUncheckedUpdateWithoutTagInput>
  }

  export type OrderUpdateManyWithWhereWithoutTagInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutTagInput>
  }

  export type OrderCreateWithoutWrapInput = {
    id?: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrderInput
    delivery: DeliveryInfoCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    tag: OrderTagCreateNestedOneWithoutOrdersInput
    preference: PreferencePriceCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutWrapInput = {
    id?: string
    userId: string
    deliveryId: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    orderTagId: string
    preferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutWrapInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutWrapInput, OrderUncheckedCreateWithoutWrapInput>
  }

  export type OrderCreateManyWrapInputEnvelope = {
    data: OrderCreateManyWrapInput | OrderCreateManyWrapInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutWrapInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutWrapInput, OrderUncheckedUpdateWithoutWrapInput>
    create: XOR<OrderCreateWithoutWrapInput, OrderUncheckedCreateWithoutWrapInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutWrapInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutWrapInput, OrderUncheckedUpdateWithoutWrapInput>
  }

  export type OrderUpdateManyWithWhereWithoutWrapInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutWrapInput>
  }

  export type OrderCreateWithoutPreferenceInput = {
    id?: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrderInput
    delivery: DeliveryInfoCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    tag: OrderTagCreateNestedOneWithoutOrdersInput
    wrap: WrapCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutPreferenceInput = {
    id?: string
    userId: string
    deliveryId: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    orderTagId: string
    wrapId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPreferenceInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPreferenceInput, OrderUncheckedCreateWithoutPreferenceInput>
  }

  export type OrderCreateManyPreferenceInputEnvelope = {
    data: OrderCreateManyPreferenceInput | OrderCreateManyPreferenceInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutPreferenceInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutPreferenceInput, OrderUncheckedUpdateWithoutPreferenceInput>
    create: XOR<OrderCreateWithoutPreferenceInput, OrderUncheckedCreateWithoutPreferenceInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutPreferenceInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutPreferenceInput, OrderUncheckedUpdateWithoutPreferenceInput>
  }

  export type OrderUpdateManyWithWhereWithoutPreferenceInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutPreferenceInput>
  }

  export type UserCreateWithoutOrderInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    combo?: ComboCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutUserInput
    deliveryInfo?: DeliveryInfoCreateNestedManyWithoutUserInput
    orderTag?: OrderTagCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutOrderInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    combo?: ComboUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
    deliveryInfo?: DeliveryInfoUncheckedCreateNestedManyWithoutUserInput
    orderTag?: OrderTagUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
  }

  export type DeliveryInfoCreateWithoutOrderInput = {
    id?: string
    name: string
    contact: string
    addressLine: string
    city: string
    state: string
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDeliveryInfoInput
  }

  export type DeliveryInfoUncheckedCreateWithoutOrderInput = {
    id?: string
    userId: string
    name: string
    contact: string
    addressLine: string
    city: string
    state: string
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryInfoCreateOrConnectWithoutOrderInput = {
    where: DeliveryInfoWhereUniqueInput
    create: XOR<DeliveryInfoCreateWithoutOrderInput, DeliveryInfoUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    combo?: ComboCreateNestedOneWithoutOrderItemInput
    product?: ProductCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    comboId?: string | null
    productId?: string | null
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderTagCreateWithoutOrdersInput = {
    id?: string
    name: string
    isPublic?: boolean
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutOrderTagInput
  }

  export type OrderTagUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    isPublic?: boolean
    price?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderTagCreateOrConnectWithoutOrdersInput = {
    where: OrderTagWhereUniqueInput
    create: XOR<OrderTagCreateWithoutOrdersInput, OrderTagUncheckedCreateWithoutOrdersInput>
  }

  export type WrapCreateWithoutOrdersInput = {
    id?: string
    name: string
    isPremium?: boolean
    price?: number
    imageUrl: string
  }

  export type WrapUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    isPremium?: boolean
    price?: number
    imageUrl: string
  }

  export type WrapCreateOrConnectWithoutOrdersInput = {
    where: WrapWhereUniqueInput
    create: XOR<WrapCreateWithoutOrdersInput, WrapUncheckedCreateWithoutOrdersInput>
  }

  export type PreferencePriceCreateWithoutOrdersInput = {
    id?: string
    preference: $Enums.Preference
    price: number
  }

  export type PreferencePriceUncheckedCreateWithoutOrdersInput = {
    id?: string
    preference: $Enums.Preference
    price: number
  }

  export type PreferencePriceCreateOrConnectWithoutOrdersInput = {
    where: PreferencePriceWhereUniqueInput
    create: XOR<PreferencePriceCreateWithoutOrdersInput, PreferencePriceUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrderInput = {
    update: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    combo?: ComboUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutUserNestedInput
    deliveryInfo?: DeliveryInfoUpdateManyWithoutUserNestedInput
    orderTag?: OrderTagUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    combo?: ComboUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
    deliveryInfo?: DeliveryInfoUncheckedUpdateManyWithoutUserNestedInput
    orderTag?: OrderTagUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DeliveryInfoUpsertWithoutOrderInput = {
    update: XOR<DeliveryInfoUpdateWithoutOrderInput, DeliveryInfoUncheckedUpdateWithoutOrderInput>
    create: XOR<DeliveryInfoCreateWithoutOrderInput, DeliveryInfoUncheckedCreateWithoutOrderInput>
    where?: DeliveryInfoWhereInput
  }

  export type DeliveryInfoUpdateToOneWithWhereWithoutOrderInput = {
    where?: DeliveryInfoWhereInput
    data: XOR<DeliveryInfoUpdateWithoutOrderInput, DeliveryInfoUncheckedUpdateWithoutOrderInput>
  }

  export type DeliveryInfoUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDeliveryInfoNestedInput
  }

  export type DeliveryInfoUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderTagUpsertWithoutOrdersInput = {
    update: XOR<OrderTagUpdateWithoutOrdersInput, OrderTagUncheckedUpdateWithoutOrdersInput>
    create: XOR<OrderTagCreateWithoutOrdersInput, OrderTagUncheckedCreateWithoutOrdersInput>
    where?: OrderTagWhereInput
  }

  export type OrderTagUpdateToOneWithWhereWithoutOrdersInput = {
    where?: OrderTagWhereInput
    data: XOR<OrderTagUpdateWithoutOrdersInput, OrderTagUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderTagUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutOrderTagNestedInput
  }

  export type OrderTagUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WrapUpsertWithoutOrdersInput = {
    update: XOR<WrapUpdateWithoutOrdersInput, WrapUncheckedUpdateWithoutOrdersInput>
    create: XOR<WrapCreateWithoutOrdersInput, WrapUncheckedCreateWithoutOrdersInput>
    where?: WrapWhereInput
  }

  export type WrapUpdateToOneWithWhereWithoutOrdersInput = {
    where?: WrapWhereInput
    data: XOR<WrapUpdateWithoutOrdersInput, WrapUncheckedUpdateWithoutOrdersInput>
  }

  export type WrapUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type WrapUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PreferencePriceUpsertWithoutOrdersInput = {
    update: XOR<PreferencePriceUpdateWithoutOrdersInput, PreferencePriceUncheckedUpdateWithoutOrdersInput>
    create: XOR<PreferencePriceCreateWithoutOrdersInput, PreferencePriceUncheckedCreateWithoutOrdersInput>
    where?: PreferencePriceWhereInput
  }

  export type PreferencePriceUpdateToOneWithWhereWithoutOrdersInput = {
    where?: PreferencePriceWhereInput
    data: XOR<PreferencePriceUpdateWithoutOrdersInput, PreferencePriceUncheckedUpdateWithoutOrdersInput>
  }

  export type PreferencePriceUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    preference?: EnumPreferenceFieldUpdateOperationsInput | $Enums.Preference
    price?: IntFieldUpdateOperationsInput | number
  }

  export type PreferencePriceUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    preference?: EnumPreferenceFieldUpdateOperationsInput | $Enums.Preference
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrderInput
    delivery: DeliveryInfoCreateNestedOneWithoutOrderInput
    tag: OrderTagCreateNestedOneWithoutOrdersInput
    wrap: WrapCreateNestedOneWithoutOrdersInput
    preference: PreferencePriceCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    userId: string
    deliveryId: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    orderTagId: string
    wrapId: string
    preferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type ComboCreateWithoutOrderItemInput = {
    id?: string
    name: string
    totalPrice?: number | null
    discountAmount?: number | null
    perUnitPrice?: number | null
    perUnitDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutComboInput
    comboItem?: ComboItemCreateNestedManyWithoutComboInput
    cartItem?: CartItemCreateNestedManyWithoutComboInput
  }

  export type ComboUncheckedCreateWithoutOrderItemInput = {
    id?: string
    name: string
    userId?: string | null
    totalPrice?: number | null
    discountAmount?: number | null
    perUnitPrice?: number | null
    perUnitDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comboItem?: ComboItemUncheckedCreateNestedManyWithoutComboInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutComboInput
  }

  export type ComboCreateOrConnectWithoutOrderItemInput = {
    where: ComboWhereUniqueInput
    create: XOR<ComboCreateWithoutOrderItemInput, ComboUncheckedCreateWithoutOrderItemInput>
  }

  export type ProductCreateWithoutOrderItemInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    comboItem?: ComboItemCreateNestedManyWithoutProductInput
    cartItem?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    stock: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comboItem?: ComboItemUncheckedCreateNestedManyWithoutProductInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
    delivery?: DeliveryInfoUpdateOneRequiredWithoutOrderNestedInput
    tag?: OrderTagUpdateOneRequiredWithoutOrdersNestedInput
    wrap?: WrapUpdateOneRequiredWithoutOrdersNestedInput
    preference?: PreferencePriceUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    orderTagId?: StringFieldUpdateOperationsInput | string
    wrapId?: StringFieldUpdateOperationsInput | string
    preferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComboUpsertWithoutOrderItemInput = {
    update: XOR<ComboUpdateWithoutOrderItemInput, ComboUncheckedUpdateWithoutOrderItemInput>
    create: XOR<ComboCreateWithoutOrderItemInput, ComboUncheckedCreateWithoutOrderItemInput>
    where?: ComboWhereInput
  }

  export type ComboUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: ComboWhereInput
    data: XOR<ComboUpdateWithoutOrderItemInput, ComboUncheckedUpdateWithoutOrderItemInput>
  }

  export type ComboUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutComboNestedInput
    comboItem?: ComboItemUpdateManyWithoutComboNestedInput
    cartItem?: CartItemUpdateManyWithoutComboNestedInput
  }

  export type ComboUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comboItem?: ComboItemUncheckedUpdateManyWithoutComboNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutComboNestedInput
  }

  export type ProductUpsertWithoutOrderItemInput = {
    update: XOR<ProductUpdateWithoutOrderItemInput, ProductUncheckedUpdateWithoutOrderItemInput>
    create: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemInput, ProductUncheckedUpdateWithoutOrderItemInput>
  }

  export type ProductUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    comboItem?: ComboItemUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comboItem?: ComboItemUncheckedUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ComboCreateManyUserInput = {
    id?: string
    name: string
    totalPrice?: number | null
    discountAmount?: number | null
    perUnitPrice?: number | null
    perUnitDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryInfoCreateManyUserInput = {
    id?: string
    name: string
    contact: string
    addressLine: string
    city: string
    state: string
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: string
    deliveryId: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    orderTagId: string
    wrapId: string
    preferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderTagCreateManyCreatedByInput = {
    id?: string
    name: string
    isPublic?: boolean
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComboUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comboItem?: ComboItemUpdateManyWithoutComboNestedInput
    cartItem?: CartItemUpdateManyWithoutComboNestedInput
    orderItem?: OrderItemUpdateManyWithoutComboNestedInput
  }

  export type ComboUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comboItem?: ComboItemUncheckedUpdateManyWithoutComboNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutComboNestedInput
    orderItem?: OrderItemUncheckedUpdateManyWithoutComboNestedInput
  }

  export type ComboUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    perUnitDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryInfoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryInfoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUncheckedUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryInfoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryInfoUpdateOneRequiredWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    tag?: OrderTagUpdateOneRequiredWithoutOrdersNestedInput
    wrap?: WrapUpdateOneRequiredWithoutOrdersNestedInput
    preference?: PreferencePriceUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    orderTagId?: StringFieldUpdateOperationsInput | string
    wrapId?: StringFieldUpdateOperationsInput | string
    preferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    orderTagId?: StringFieldUpdateOperationsInput | string
    wrapId?: StringFieldUpdateOperationsInput | string
    preferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderTagUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutTagNestedInput
  }

  export type OrderTagUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutTagNestedInput
  }

  export type OrderTagUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComboItemCreateManyProductInput = {
    id?: string
    comboId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateManyProductInput = {
    id?: string
    comboId?: string | null
    cartId: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateManyProductInput = {
    id?: string
    orderId: string
    comboId?: string | null
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComboItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    combo?: ComboUpdateOneRequiredWithoutComboItemNestedInput
  }

  export type ComboItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    comboId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComboItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    comboId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    combo?: ComboUpdateOneWithoutCartItemNestedInput
    cart?: CartUpdateOneRequiredWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    comboId?: NullableStringFieldUpdateOperationsInput | string | null
    cartId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    comboId?: NullableStringFieldUpdateOperationsInput | string | null
    cartId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    combo?: ComboUpdateOneWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    comboId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    comboId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comboItem?: ComboItemUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comboItem?: ComboItemUncheckedUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComboItemCreateManyComboInput = {
    id?: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateManyComboInput = {
    id?: string
    productId?: string | null
    cartId: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateManyComboInput = {
    id?: string
    orderId: string
    productId?: string | null
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComboItemUpdateWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutComboItemNestedInput
  }

  export type ComboItemUncheckedUpdateWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComboItemUncheckedUpdateManyWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUpdateWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutCartItemNestedInput
    cart?: CartUpdateOneRequiredWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    cartId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    cartId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: ProductUpdateOneWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyCartInput = {
    id?: string
    comboId?: string | null
    productId?: string | null
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    combo?: ComboUpdateOneWithoutCartItemNestedInput
    product?: ProductUpdateOneWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    comboId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    comboId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyDeliveryInput = {
    id?: string
    userId: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    orderTagId: string
    wrapId: string
    preferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    tag?: OrderTagUpdateOneRequiredWithoutOrdersNestedInput
    wrap?: WrapUpdateOneRequiredWithoutOrdersNestedInput
    preference?: PreferencePriceUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    orderTagId?: StringFieldUpdateOperationsInput | string
    wrapId?: StringFieldUpdateOperationsInput | string
    preferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    orderTagId?: StringFieldUpdateOperationsInput | string
    wrapId?: StringFieldUpdateOperationsInput | string
    preferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyTagInput = {
    id?: string
    userId: string
    deliveryId: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    wrapId: string
    preferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
    delivery?: DeliveryInfoUpdateOneRequiredWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    wrap?: WrapUpdateOneRequiredWithoutOrdersNestedInput
    preference?: PreferencePriceUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    wrapId?: StringFieldUpdateOperationsInput | string
    preferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    wrapId?: StringFieldUpdateOperationsInput | string
    preferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyWrapInput = {
    id?: string
    userId: string
    deliveryId: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    orderTagId: string
    preferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutWrapInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
    delivery?: DeliveryInfoUpdateOneRequiredWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    tag?: OrderTagUpdateOneRequiredWithoutOrdersNestedInput
    preference?: PreferencePriceUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutWrapInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    orderTagId?: StringFieldUpdateOperationsInput | string
    preferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutWrapInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    orderTagId?: StringFieldUpdateOperationsInput | string
    preferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyPreferenceInput = {
    id?: string
    userId: string
    deliveryId: string
    deliveryCharge?: number
    status?: $Enums.OrderStatus
    totalPrice: number
    razorpayOrderId?: string | null
    paymentStatus?: string | null
    orderTagId: string
    wrapId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutPreferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
    delivery?: DeliveryInfoUpdateOneRequiredWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    tag?: OrderTagUpdateOneRequiredWithoutOrdersNestedInput
    wrap?: WrapUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutPreferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    orderTagId?: StringFieldUpdateOperationsInput | string
    wrapId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutPreferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalPrice?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    orderTagId?: StringFieldUpdateOperationsInput | string
    wrapId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    comboId?: string | null
    productId?: string | null
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    combo?: ComboUpdateOneWithoutOrderItemNestedInput
    product?: ProductUpdateOneWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    comboId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    comboId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}