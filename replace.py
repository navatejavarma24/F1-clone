import sys

file_path = r'c:\Users\navateja varma\Downloads\ag\projects\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

target = '''            <div class="nav-links">
                <a href="#" id="schedule-link">Schedule</a>
                <a href="drivers.html" class="has-dropdown" id="f1-nav-link">Formula 1 <span class="arrow-down"></span></a>
            </div>'''
            
replacement = '''            <div class="nav-links">
                <a href="/" id="home-link">Home</a>
                <a href="#" id="schedule-link">Schedule</a>
                <a href="f1.html" id="all-time-10-link">All Time 10</a>
                <a href="standings.html" id="standings-link">Current Standings</a>
                <a href="live.html" id="live-link">Live</a>
                <a href="drivers.html" class="has-dropdown" id="f1-nav-link">Formula 1 <span class="arrow-down"></span></a>
            </div>'''

# Windows might use \r\n
if target not in content and target.replace('\n', '\r\n') in content:
    target = target.replace('\n', '\r\n')
    replacement = replacement.replace('\n', '\r\n')

if target in content:
    content = content.replace(target, replacement)
    with open(file_path, 'w', encoding='utf-8', newline='') as f:
        f.write(content)
    print("Replaced successfully!")
else:
    print("Target not found.")
