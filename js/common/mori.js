var _ = require("mori");

export function not(x) {
  return !x;
}

export function nil(x) {
  return x === null;
}

export const notAny = _.comp(_.not, _.some);

export function ffirst(coll) {
  return _.first(_.first(coll));
}

export function min(x, y) {
  return x - y;
}

export function nodelistToClj(nodelist) {
  return _.js_to_clj(Array.prototype.slice.call(nodelist));
}

export function index_of(vector, item) {
  return _.some(
    function(x) {
       if (_.equals(_.first(x), item)) {
        return _.last(x);
      } else {
        return false;
      }
    },
    _.partition(2, _.interleave(vector, _.range()))
  );
}

export function isArray(item) {
  return Object.prototype.toString.call(item) === "[object Array]";
}

export function removeNth(coll, i) {
  return _.splice(coll, i);
}

export const apply = _.apply;
export const count = _.count;
export const distinct = _.distinct;
export const empty = _.empty;
export const first = _.first;
export const second = _.second;
export const next = _.next;
export const rest = _.rest;
export const seq = _.seq;
export const conj = _.conj;
export const cons = _.cons;
export const find = _.find;
export const nth = _.nth;
export const last = _.last;
export const assoc = _.assoc;
export const dissoc = _.dissoc;
export const getIn = _.getIn;
export const updateIn = _.updateIn;
export const assocIn = _.assocIn;
export const fnil = _.fnil;
export const disj = _.disj;
export const pop = _.pop;
export const peek = _.peek;
export const hash = _.hash;
export const get = _.get;
export const hasKey = _.hasKey;
export const isEmpty = _.isEmpty;
export const reverse = _.reverse;
export const take = _.take;
export const drop = _.drop;
export const takeNth = _.takeNth;
export const partition = _.partition;
export const partitionAll = _.partitionAll;
export const partitionBy = _.partitionBy;
export const iterate = _.iterate;
export const into = _.into;
export const merge = _.merge;
export const mergeWith = _.mergeWith;
export const subvec = _.subvec;
export const takeWhile = _.takeWhile;
export const dropWhile = _.dropWhile;
export const groupBy = _.groupBy;
export const interpose = _.interpose;
export const interleave = _.interleave;
export const concat = _.concat;
export const flatten = _.flatten;
export const lazySeq = _.lazySeq;
export const keys = _.keys;
export const selectKeys = _.selectKeys;
export const vals = _.vals;
export const primSeq = _.primSeq;
export const map = _.map;
export const mapIndexed = _.mapIndexed;
export const mapcat = _.mapcat;
export const reduce = _.reduce;
export const reduceKV = _.reduceKV;
export const keep = _.keep;
export const keepIndexed = _.keepIndexed;
export const filter = _.filter;
export const remove = _.remove;
export const some = _.some;
export const every = _.every;
export const equals = _.equals;
export const range = _.range;
export const repeat = _.repeat;
export const repeatedly = _.repeatedly;
export const sort = _.sort;
export const sortBy = _.sortBy;
export const intoArray = _.intoArray;
export const subseq = _.subseq;
export const dedupe = _.dedupe;
export const transduce = _.transduce;
export const eduction = _.eduction;
export const sequence = _.sequence;
export const completing = _.completing;
export const list = _.list;
export const vector = _.vector;
export const hashMap = _.hashMap;
export const set = _.set;
export const sortedSet = _.sortedSet;
export const sortedSetBy = _.sortedSetBy;
export const sortedMap = _.sortedMap;
export const sortedMapBy = _.sortedMapBy;
export const queue = _.queue;
export const keyword = _.keyword;
export const symbol = _.symbol;
export const zipmap = _.zipmap;
export const isList = _.isList;
export const isSeq = _.isSeq;
export const isVector = _.isVector;
export const isMap = _.isMap;
export const isSet = _.isSet;
export const isKeyword = _.isKeyword;
export const isSymbol = _.isSymbol;
export const isCollection = _.isCollection;
export const isSequential = _.isSequential;
export const isAssociative = _.isAssociative;
export const isCounted = _.isCounted;
export const isIndexed = _.isIndexed;
export const isReduceable = _.isReduceable;
export const isSeqable = _.isSeqable;
export const isReversible = _.isReversible;
export const union = _.union;
export const intersection = _.intersection;
export const difference = _.difference;
export const join = _.join;
export const index = _.index;
export const project = _.project;
export const mapInvert = _.mapInvert;
export const rename = _.rename;
export const renameKeys = _.renameKeys;
export const isSubset = _.isSubset;
export const isSuperset = _.isSuperset;
export const notEquals = _.notEquals;
export const gt = _.gt;
export const gte = _.gte;
export const lt = _.lt;
export const lte = _.lte;
export const compare = _.compare;
export const partial = _.partial;
export const comp = _.comp;
export const pipeline = _.pipeline;
export const curry = _.curry;
export const juxt = _.juxt;
export const knit = _.knit;
export const sum = _.sum;
export const inc = _.inc;
export const dec = _.dec;
export const isEven = _.isEven;
export const isOdd = _.isOdd;
export const each = _.each;
export const identity = _.identity;
export const constantly = _.constantly;
export const toJs = _.toJs;
export const toClj = _.toClj;
export const configure = _.configure;
export const meta = _.meta;
export const withMeta = _.withMeta;
export const varyMeta = _.varyMeta;
export const alterMeta = _.alterMeta;
export const resetMeta = _.resetMeta;
export const mutable = _.mutable;
