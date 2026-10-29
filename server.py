import http.server
import socketserver
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CampusPortalHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    # Allow port reuse
    with http.server.ThreadingHTTPServer(("", PORT), CampusPortalHandler) as httpd:
        print(f"================================================================")
        print(f" CAMPUSIQ Official College Student Portal Server Live")
        print(f" Serving directory: {DIRECTORY}")
        print(f" URL: http://localhost:{PORT}")
        print(f"================================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            httpd.server_close()
