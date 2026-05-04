const { supabase } = require('../config/supabase');

const supabaseService = {
  list: async (table, { page = 1, limit = 20, search = '', filters = {}, searchFields = ['nom'] }) => {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
      .from(table)
      .select('*', { count: 'exact' });

    Object.entries(filters).forEach(([key, value]) => {
      if (value) query = query.eq(key, value);
    });

    if (search && searchFields.length > 0) {
      const orConditions = searchFields.map(field => `${field}.ilike.%${search}%`).join(',');
      query = query.or(orConditions);
    }

    const { data, count, error } = await query
      .range(from, to)
      .order('id', { ascending: false });

    return { data, total: count, error };
  },

  getById: async (table, id, select = '*') => {
    return await supabase
      .from(table)
      .select(select)
      .eq('id', id)
      .single();
  }
};

module.exports = supabaseService;
