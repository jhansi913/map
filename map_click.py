import streamlit as st
from streamlit_custom_components import st_custom_components

def main():
    st.title("Click on the Map to Get Latitude and Longitude")

    # Display the map
    map_data = st_custom_components.declarative_map()

    # Listen for messages from the custom component
    message = st_custom_components.receive_message("map_click")

    # If a message is received, extract latitude and longitude
    if message:
        latitude = message.get("latitude")
        longitude = message.get("longitude")
        if latitude is not None and longitude is not None:
            st.write("Latitude:", latitude)
            st.write("Longitude:", longitude)

if __name__ == "__main__":
    main()
