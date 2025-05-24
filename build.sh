tsc

if [[ "$1" == "host" ]]; then
    trap "trap - TERM && kill -- -$$" INT TERM EXIT
    (python -m http.server 8001 &> /dev/null) &
    (cd PolyModLoader; python -m http.server 8000 &> /dev/null) &
    wait
fi