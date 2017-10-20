export const SET_COUNTRIES = '__SET_COUNTRIES__'
export const SET_MATERIALS = '__SET_MATERIALS__'
export const SET_STANDARDS = '__SET_STANDARDS__'
export const SET_DIAGNOSIS_AVAILABLE = '__SET_DIAGNOSIS_AVAILABLE__'
export const UPDATE_FILTER = '__UPDATE_FILTER__'
export const SET_BIOBANKS = '__SET_BIOBANKS__'
export const SET_SEARCH = '__SET_SEARCH__'
export const SET_BIOBANK_REPORT = '__SET_BIOBANK_REPORT__'
export const MAP_QUERY_TO_STATE = '__MAP_QUERY_TO_STATE__'
export const MAP_DIAGNOSIS_AVAILABLE_QUERY_TO_STATE = '__MAP_DIAGNOSIS_AVAILABLE_QUERY_TO_STATE__'
export const SET_LOADING = '__SET_LOADING__'
export const SET_ERROR = '__SET_ERROR__'

export default {
  /**
   * Update the options for the different filters available in the biobank explorer
   */
  [SET_COUNTRIES] (state, countries) {
    state.country.options = countries
  },
  [SET_MATERIALS] (state, materials) {
    state.materials.options = materials
  },
  [SET_STANDARDS] (state, standards) {
    state.standards.options = standards
  },
  [SET_DIAGNOSIS_AVAILABLE] (state, diagnoses) {
    state.diagnosis_available.options = diagnoses
  },
  /**
   * Register the filters for country, materials, standards, and diagnosis_available in the state
   * so they can be used for 1) the URL and 2) retrieving biobanks based on IDs
   *
   * @param state
   * @param name name of the state entry e.g. country, materials, standards, or diagnosis_available
   * @param filters an array of values
   */
  [UPDATE_FILTER] (state, {name, filters}) {
    state[name].filters = filters
  },
  /**
   * Stores biobanks in the state. The list of biobanks is only overwritten when:
   *
   * 1) Any filter is changed
   * 2) A search query is submitted
   * 3) The page is refreshed
   */
  [SET_BIOBANKS] (state, biobanks) {
    state.biobanks = biobanks
  },
  [SET_ERROR] (state, error) {
    state.error = error
  },
  [SET_SEARCH] (state, search) {
    state.search = search
  },
  [MAP_QUERY_TO_STATE] (state, query) {
    if (Object.keys(query).length > 0) {
      if (query.search) state.search = query.search
      if (query.country) state.country.filters = query.country.split(',')
      if (query.materials) state.materials.filters = query.materials.split(',')
      if (query.standards) state.standards.filters = query.standards.split(',')
      if (query.nToken) state.nToken = query.nToken
    }
  },
  [MAP_DIAGNOSIS_AVAILABLE_QUERY_TO_STATE] (state, filters) {
    state.diagnosis_available.filters = filters
  },
  [SET_BIOBANK_REPORT] (state, biobank) {
    state.biobankReport = biobank
  },
  [SET_LOADING] (state, loading) {
    state.loading = loading
  }
}
