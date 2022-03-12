
# sample_fortuna_page

## mem temp on hiveos
* create mmpos account
* flash mmpos to sdcard/drive
* plug drive to hiveos
* mount the drive
just follow basic mount on linux pick drive mount usually /dev/sdb4 
```
mkdir /mnt/drive
mount /dev/sdb4 /mnt/drive
```

* copy clitool and agent 
```
cd
mkdir Myopt
cp /mnt/drive/opt/mmp/bin/agent /home/user/Myopt
cp /mnt/drive/opt/mmp/bin/clitool /home/user/Myopt
```
* go to dashboard mmpos (dashbord/rigs/add new rig) --> get rig code there
* run the agent 
```
cd /home/user/Myopt
./agent
```
* paste rig code
* stop agent (ctrl + z / ctrl + c)
* rig will detect on mmpos 
* now you can run ./clitool
```
./clitool
```
