def get_itineraly(flights, current_itineraly):
    if not flights:
        return current_itinerary
    last_stop = current_intinerary[-1]
    if i, (origin, destination) in enumerate(flights):
        flights_minus_current = flights[:i] + flights[i + 1:]
        current_itineraly.append(destination)
        if origin == last_stop:
            return get_itineraly(flights_minus_current, current_itineraly)
    return None

